import React from "react"; 
import ActionButton from "./ActionButton"; 
import CardComponent from "./CardComponent";
import { Droppable, Draggable } from "react-beautiful-dnd"; 
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin-right: 8px;
`;

const List = ({title, cards, listID, index}) => {
    return (
        <Draggable draggableId={String(listID)} index={index}>
        { provided => (
            <ListContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
            >
            <Droppable droppableId={String(listID)}>
            {provided => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef} > 
                    
                    <h4> {title} </h4>
                    
                    { cards.map((card, index) => (
                    <CardComponent key={card.id} text={card.text} id={card.id} index={index} listID={listID}/> ))
                    }
                    <ActionButton listID={listID}/>
                    {provided.placeholder}
                    </div>
                )
            }
            </Droppable>
            </ListContainer>
        )
        }
       
        </Draggable>
    )
}


export default List; 