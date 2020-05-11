import React, { PureComponent } from "react"; 
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ActionButton from "./ActionButton";
import ListContainer from "./styled/ListContainer"; 
import List from "./List";
import { connect } from "react-redux"; 
import { sort } from "../actions";

class Board extends PureComponent {

    onDragEnd = (result) => {
        const { destination, source, draggableId, type} = result;
    
        // if we move card to somewhere outside of the droppable
        if(!destination){
            return; 
        }
        this.props.dispatch(sort(
          source.droppableId,
          destination.droppableId, 
          source.index, 
          destination.index,
          draggableId,
          type)); 
      }
    
    render(){
        const { lists } = this.props; 

        return (
            <DragDropContext onDragEnd={this.onDragEnd}>
                <h2>My Board</h2>
            <Droppable droppableId="all-lists" direction="horizontal" type="list">
              { provided => (
                <ListContainer 
                {...provided.droppableProps}
                 ref={provided.innerRef}>
                {lists.map((list, index) => 
                <List listID={list.id} key={list.id} title={list.title} cards={list.cards} index={index}></List>)}
                {provided.placeholder}
                <ActionButton list> </ActionButton>
                </ListContainer>
              )
              }
            </Droppable>
            </DragDropContext>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists 
})

export default  connect(mapStateToProps)(Board); 