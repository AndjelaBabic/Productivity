import React, {useState} from "react"; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Form from "./Form";
import EditIcon from '@material-ui/icons/Edit';
import { editCard } from "../actions";
import { connect } from "react-redux"; 

const CardContainer = styled.div`
  margin: 0 0 8px 0;
  position: relative;
  max-width: 100%;
  word-wrap: break-word;

`;

const EditButton = styled(EditIcon)`
  position: absolute;
  display: none;
  right: 5px;
  top: 5px;
  opacity: 0.5;
  ${CardContainer}:hover & {
    display: block;
    cursor: pointer;
  }
  &:hover {
    opacity: 0.8;
  }
`;


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

  const handleChange = e => {
    setCardText(e.target.value);
  };

  const renderEditForm = () => {
    return (
      <Form
      text={cardText}
      closeForm={closeForm}
      onClick={saveCard}
      onChange={handleChange}/>
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