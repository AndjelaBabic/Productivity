import React from "react"; 
import styled from "styled-components";
import Textarea from "react-textarea-autosize";
import Card from "@material-ui/core/Card";
import Button from "@material-ui/core/Button";
import CloseIcon from '@material-ui/icons/Close';
import ButtonContainer from "./styled/ButtonContainer.js"; 
import Container from "./styled/Container.js"

const Form = React.memo(({ list, text = "", onChange, onClick, closeForm, buttonTitle = "Save" }) => {

  const placeholder = list
    ? "Enter list title..."
    : "Enter a title for this card...";



  return (
    <Container>
            <Card style={{
                minHeight: 80, 
                padding: "6px 8px 2px"
            }}>
                <Textarea 
                placeholder={placeholder} 
                autoFocus 
                onBlur={closeForm}
                value={text}
                onChange={e => onChange(e)}
                style={{
                    resize: "none", 
                    width: "100%", 
                    outline: "none",
                    border: "none"
                }}/>
            </Card>
            <ButtonContainer>
                <Button 
                // onMouseDown instead of onClick because onMouseDown fires before onBlur for the TextArea
                onMouseDown={onClick}
                variant="contained"
                style={{color: "white", backgroundColor: "#5aac44"}}>
                    {buttonTitle}
                </Button>
                <CloseIcon
                style={{ marginLeft: 8, cursor: "pointer"}}
                onClick={closeForm}>
                </CloseIcon>
            </ButtonContainer>
        </Container>
  );
});

export default Form; 