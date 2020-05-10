import React, {useState} from "react"; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from "react-beautiful-dnd";
import Form from "./Form";

import { editCard, deleteCard } from "../actions";
import { connect } from "react-redux"; 
import DeleteButton from "./styled/DeleteButton.js";
import CardContainer from "./styled/CardContainer.js";
import EditButton from "./styled/EditButton.js";

const CardComponent = React.memo(({text, id, listID, index, dispatch}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setCardText] = useState(text);

  const closeForm = e => {
    setIsEditing(false);
    setCardText(text); 
  };

  const saveCard = e => {
    // run redux action
    e.preventDefault();
    dispatch(editCard(id, listID, cardText));
    setIsEditing(false); 
  };

  const handleDeleteCard = e => {
    // run redux action
    dispatch(deleteCard(id, listID));
  };

  const handleChange = e => {
    setCardText(e.target.value);
  };

  const renderEditForm = () => {
    return (
      <Form
      text={cardText}
      closeForm={closeForm}
      onClick={saveCard}
      onChange={handleChange}
      deleteCard={deleteCard}/>
    );
  };
  
    const renderCard = () => {
      return  (
    <Draggable draggableId={String(id)} index={index}>
    {
      provided => (
        <CardContainer
        ref={provided.innerRef} 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}
        onDoubleClick={() => setIsEditing(true)}>
          <Card>
            <EditButton
                onMouseDown={() => setIsEditing(true)}
                fontSize="small">edit</EditButton>
            <DeleteButton onMouseDown={handleDeleteCard}
                fontSize="small">delete</DeleteButton>
            <CardContent>
              <Typography gutterBottom>
              {text}
              </Typography>
            </CardContent>
          </Card>
        </CardContainer>
      )
    }
    </Draggable>
  )
  }

    return isEditing ? renderEditForm() : renderCard(); 
});

export default (connect)() (CardComponent); 