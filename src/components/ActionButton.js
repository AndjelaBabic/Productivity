import React from "react"; 
import CloseIcon from '@material-ui/icons/Close';
import { Card, Button, Icon } from "@material-ui/core";
import TextArea from 'react-textarea-autosize'; 
import { connect } from "react-redux"; 
import { addList, addCard } from "../actions"; 
import styled from "styled-components";
import OpenForm from "./OpenForm";

class ActionButton extends React.Component {
    state = {
        formOpen: false, 
        text: ""
    }

    openForm = () => {
        this.setState({
            formOpen: true 
        }); 
    }; 

    closeForm = (e) => {
        this.setState({
            formOpen: false 
        }); 
    }; 

    handleInputChange = e => {
        this.setState({
            text: e.target.value
        })
    }

    handleAddList = () => {
        const { dispatch } = this.props;  
        const { text } = this.state; 

        if(text){
            this.setState({
                text: "" 
            }); 
            dispatch(addList(text)); 
        }
        return; 
    }

    handleAddCard = () => {
        const { dispatch, listID} = this.props;  
        const { text } = this.state; 

        if(text){
            this.setState({
                text: "" 
            }); 
            dispatch(addCard(listID, text)); 
        }
    }

    renderForm = () => {
        const { list } = this.props; 
        const placeholder = list ? "Enter list title..." : "Enter title for this card...";
        const buttonTittle = list ? "Add List" : "Add Card"; 
  
      const ButtonContainer = styled.div`
        margin-top: 8px;
        display: flex;
        align-items: center;
        margin-left: 8px;
      `;

        return <div>
            <Card style={{
                overflow: "visible", 
                minHeight: 80, 
                minWidth: 272,
                padding: "6px 8px 2px"
            }}>
                <TextArea 
                placeholder={placeholder} 
                autoFocus 
                onBlur={this.closeForm}
                onChange={this.handleInputChange}
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
                onMouseDown={list ? this.handleAddList : this.handleAddCard}
                variant="contained"
                style={{color: "white", backgroundColor: "#5aac44"}}>
                    {buttonTittle}
                </Button>
                <CloseIcon
                style={{ marginLeft: 8, cursor: "pointer"}}
                onClick={this.closeForm}>
                </CloseIcon>
            </ButtonContainer>
        </div>;
    }

    renderAddButton = () => {
        const { list } = this.props; 
        const buttonText = list ? "Add another list" : "Add another card"; 
        return (
            <OpenForm list={list} children={buttonText} openForm={this.openForm}></OpenForm>
        )
    }


    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

export default connect() (ActionButton); 