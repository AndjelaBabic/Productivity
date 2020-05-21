import React, { PureComponent } from "react"; 
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import ActionButton from "./ActionButton";
import ListContainer from "./styled/ListContainer"; 
import List from "./List";
import { connect } from "react-redux"; 
import { sort, setActiveBoard } from "../actions";
import { Link } from "react-router-dom";

class Board extends PureComponent {

    componentDidMount() {
        // set active trello board here
        const { boardID } = this.props.match.params;
        this.props.dispatch(setActiveBoard(boardID));
      }

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
        const { lists, match, boards, cards } = this.props; 
        const { boardID } = match.params;
        const board = boards[boardID];
        if (!board) {
          return <p>Board not found</p>;
        }

        const listOrder = board.lists;
        return (
          <div style={{marginLeft: "15px"}}>
            <DragDropContext onDragEnd={this.onDragEnd}>
                <Link to="/home">Go Back</Link>
                <h2>My Board</h2>
            <Droppable droppableId="all-lists" direction="horizontal" type="list">
              { provided => (
                <ListContainer 
                {...provided.droppableProps}
                 ref={provided.innerRef}>
                {listOrder.map((listID, index) => {
                const list = lists[listID];
                  if(list){
                    const listCards = list.cards.map(cardID => cards[cardID]);  
                    return (
                      <List listID={list.id}
                            key={list.id}
                            title={list.title} 
                            cards={listCards} 
                            index={index}/>
                    );
                  }
                })}
                {provided.placeholder}
                <ActionButton list> </ActionButton>
                </ListContainer>
              )
              }
            </Droppable>
            </DragDropContext>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    lists: state.lists,
    boards: state.boards, 
    cards: state.cards
})

export default  connect(mapStateToProps)(Board); 