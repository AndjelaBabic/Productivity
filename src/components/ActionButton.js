import React from "react"; 
import AddIcon from "@material-ui/icons/Add";
import CloseIcon from '@material-ui/icons/Close';
import { Card, Button, Icon } from "@material-ui/core";
import TextArea from 'react-textarea-autosize'; 

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

    renderForm = () => {
        const { list } = this.props; 
        const placeholder = list ? "Enter list title..." : "Enter title for this card...";
        const buttonTittle = list ? "Add List" : "Add Card"; 

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
            <div style={styles.formButtonGroup}>
                <Button 
                variant="contained"
                style={{color: "white", backgroundColor: "#5aac44"}}>
                    {buttonTittle}
                </Button>
                <CloseIcon
                style={{ marginLeft: 8, cursor: "pointer"}}>
                </CloseIcon>
            </div>
        </div>;
    }

    renderAddButton = () => {
        const { list } = this.props; 

        const buttonText = list ? "Add another list" : "Add another card"; 
        const buttonTextOpacity = list ? 1 : 0.5; 
        const buttonTextColor = list ? "white" : "inherit"; 
        const buttonTextBackground = list ? "rgba(0,0,0,.15)" : "inherit"; 

        return (
            <div
            onClick={this.openForm} 
            style={{
                ...styles.openForButtonGroup, 
                opacity: buttonTextOpacity,
                color: buttonTextColor, 
                backgroundColor: buttonTextBackground}}>   
                <AddIcon></AddIcon>
                <p>{buttonText}</p>
            </div>
        )
    }


    render(){
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

const styles = {
    openForButtonGroup: {
        display: "flex", 
        alignItems: "center", 
        cursor: "pointer", 
        borderRadius: 3, 
        height: 36, 
        width: 272, 
        paddingLeft: 10
    }, 
    formButtonGroup: {
        marginTop: 8, 
        display: "flex", 
        alignItems: "center"
    }
}

export default ActionButton; 