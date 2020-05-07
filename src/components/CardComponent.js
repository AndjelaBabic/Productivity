import React, {useState} from "react"; 
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Draggable } from "react-beautiful-dnd";
import styled from "styled-components";
import Form from "./Form";

const CardContainer = styled.div`
  margin-bottom: 8px;
`;

const CardComponent = ({text, id, index}) => {

  const [isEditing, setIsEditing] = useState(false);
  const [cardText, setCardText] = useState(text);

  const closeForm = e => {
    setIsEditing(false);
  };

  const saveCard = () => {
    // run redux action
  };

  const renderEditForm = () => {
    return (
      <Form
      text={cardText}
      setText={setCardText}
      closeForm={closeForm}
      actionButtonClicked={saveCard}/>
    );
  };
  
    const renderCard = () => {
      return  (
    <Draggable draggableId={id} index={index}>
    {
      
      provided => (
        <CardContainer
        ref={provided.innerRef} 
        {...provided.draggableProps} 
        {...provided.dragHandleProps}
        onDoubleClick={() => setIsEditing(true)}>
          <Card>
            <CardContent>
              <Typography gutterBottom>
              {cardText}
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
}

export default CardComponent; 