import React from "react"; 
import ActionButton from "./ActionButton"; 
import CardComponent from "./CardComponent";
import { Droppable } from "react-beautiful-dnd"; 
import styled from "styled-components";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: 100%;
  margin-right: 8px;
`;

const List = ({title, cards, listID}) => {
    return (
        <Droppable droppableId={String(listID)}>
        {provided => (
                <ListContainer
                {...provided.droppableProps} 
                ref={provided.innerRef} > 
                
                <h4> {title} </h4>
                
                { cards.map((card, index) => (
                <CardComponent key={card.id} text={card.text} id={card.id} index={index}/> ))
                }
                <ActionButton listID={listID}/>
                {provided.placeholder}
                </ListContainer>
            )
        }
        </Droppable>
    )
}


export default List; 