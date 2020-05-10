import React, {useState } from "react"; 
import ActionButton from "./ActionButton"; 
import CardComponent from "./CardComponent";
import { Droppable, Draggable } from "react-beautiful-dnd"; 
import styled from "styled-components";
import { connect } from "react-redux";
import { editListTitle } from "../actions";

const ListContainer = styled.div`
  background-color: #dfe3e6;
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  margin-right: 8px;
`;

const StyledInput = styled.input`
width: 100%;
border: none;
outline-color: blue;
border-radius: 3px;
margin-bottom: 3px;
padding: 5px;
`;

const List = React.memo(({title, cards, listID, index, dispatch}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    const renderEditForm = e => {
        return (
            <StyledInput
              type="text"
              value={listTitle}
              onChange={handleChange}
              autoFocus
              onKeyDown={handleEnter}
              onBlur={handleFinishEditing}
            />
          );
    };
      const handleChange = e => {
        e.preventDefault();
        setListTitle(e.target.value);
      };
    
      const handleEnter = e => {
        if (e.key === 'Enter') {
            handleFinishEditing(e);
        }
      };
    
      const handleFinishEditing = e => {
        setIsEditing(false);
        dispatch(editListTitle(listID, listTitle));
      };

    return (
        <Draggable draggableId={String(listID)} index={index}>
        { provided => (
            <ListContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
            <Droppable droppableId={String(listID)}>
            {provided => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef} > 
                    { isEditing ?
                    renderEditForm() :  
                    (<h4 onClick={() => setIsEditing(true)}>{listTitle}</h4>)}
                    
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
);

export default connect()(List); 