import React, {useState } from "react"; 
import ActionButton from "./ActionButton"; 
import CardComponent from "./CardComponent";
import { Droppable, Draggable } from "react-beautiful-dnd"; 
import styled from "styled-components";
import { connect } from "react-redux";
import { editListTitle, deleteList } from "../actions";
import DeleteIcon from '@material-ui/icons/Delete';

const ListContainer = styled.div`
  background-color: #e4e4e459;
  border-radius: 3px;
  width: 300px;
  height: 100%;
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

const TitleContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  cursor: pointer;
`;

const DeleteButton = styled(DeleteIcon)`
  cursor: pointer;
`;

const ListTitle = styled.h4`
  transition: background 0.3s ease-in;
  ${TitleContainer}:hover & {
    background: #ccc;
  }
`;

const List = React.memo(({title, cards, listID, index, dispatch}) => {

    const [isEditing, setIsEditing] = useState(false);
    const [listTitle, setListTitle] = useState(title);

    const renderEditForm = e => {
        return (
            <form onSubmit={handleFinishEditing}>
            <StyledInput
              type="text"
              value={listTitle}
              onChange={handleChange}
              autoFocus
              onBlur={handleFinishEditing}
            />
            </form>
          );
    };
      const handleChange = e => {
        e.preventDefault();
        setListTitle(e.target.value);
      };
    
      const handleFinishEditing = e => {
        setIsEditing(false);
        dispatch(editListTitle(listID, listTitle));
      };

      const handleDeleteList = () => {
        dispatch(deleteList(listID));
      };
    return (
        <Draggable draggableId={String(listID)} index={index}>
        { provided => (
            <ListContainer
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}>
                { isEditing ?
                  renderEditForm() :  
                  ( <TitleContainer onClick={() => setIsEditing(true)}>
                  <ListTitle>{listTitle}</ListTitle>
                  <DeleteButton onClick={handleDeleteList}>
                      delete
                  </DeleteButton>
                  </TitleContainer>)}
            <Droppable droppableId={String(listID)}>
            {provided => (
                    <div
                    {...provided.droppableProps}
                    ref={provided.innerRef} > 
                   
                    
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