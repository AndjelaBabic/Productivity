import React from "react"; 
import styled from "styled-components";
import Icon from "@material-ui/core/Icon";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';

const Form = props => {
  const { list, text = "", setText, actionButtonClicked, closeForm } = props;

  const placeholder = list
    ? "Enter list title..."
    : "Enter a title for this card...";

  const buttonTitle = "Save";

  const Container = styled.div`
    width: ${list ? "300px" : "100%"};
    margin-bottom: 8px;
  `;

  const StyledCard = styled(Card)`
    min-height: 85px;
    padding: 6px 8px 2px;
  `;

  const StyledTextArea = styled(Textarea)`
    resize: none;
    width: 100%;
    overflow: hidden;
    outline: none;
    border: none;
  `;

  const StyledButton = styled(Button)`
    && {
      color: white;
      background: #5aac44;
    }
  `;

  const ButtonContainer = styled.div`
    margin-top: 8px;
    display: flex;
    align-items: center;
    margin-left: 8px;
  `;


  return (
    <Container>
      <StyledCard>
        <StyledTextArea
          placeholder={placeholder}
          value={text}
          onChange={e => setText(e.target.value)}
          onBlur={closeForm}
          autoFocus/>
      </StyledCard>
      <ButtonContainer>
        <StyledButton 
        variant="contained"
        onMouseDown={actionButtonClicked}
        children={buttonTitle} />
        <CloseIcon style={{ marginLeft: 8, cursor: "pointer"}} onMouseDown={closeForm}>close</CloseIcon>
      </ButtonContainer>
    </Container>
  );
};

export default Form; 