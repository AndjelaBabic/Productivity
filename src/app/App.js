import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import MainForm from '../pages/Login/MainForm';
import Board from '../pages/ToDo/Board';
import List from '../components/List';
import { connect } from "react-redux";
import ActionButton from '../components/ActionButton';
import { DragDropContext } from "react-beautiful-dnd";  
import { sort } from "../actions"; 
import styled from "styled-components";

const ListContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

class App extends React.Component {

  onDragEnd = (result) => {
    const { destination, source, draggableId} = result;

    // if we move card to somewhere outside of the droppable
    if(!destination){
        return; 
    }
    this.props.dispatch(sort(
      source.droppableId,
      destination.droppableId, 
      source.index, 
      destination.index,
      draggableId)); 
  }

  render(){
    const { lists } = this.props; 
    return (
      <Router>
        <div className="App">
        <Switch>
        <Route exact path="/" component={MainForm}></Route>
        <Route path="/todo" component={Board}></Route>
        <Route path="/list" render={() => (
          <DragDropContext onDragEnd={this.onDragEnd}>
          <ListContainer>
              {lists.map(list => <List listID={list.id} key={list.id} title={list.title} cards={list.cards}></List>)}
              <ActionButton list> </ActionButton>
          </ListContainer>
          </DragDropContext>
          )}></Route>
        </Switch>
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  lists: state.lists 
})

export default connect(mapStateToProps) (App);
