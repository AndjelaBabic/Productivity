import React from "react";
import { addList, addCard } from "../actions";
import OpenForm from "./OpenForm";
import Form from "./Form";
import { connect } from "react-redux"; 
export class ActionButton extends React.Component {
    state = {
        formOpen: false,
        text: ""
    };
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
        });
    };
    handleAddList = () => {
        const { dispatch } = this.props;
        const { text } = this.state;
        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addList(text));
        }
        return;
    };
    handleAddCard = () => {
        const { dispatch, listID } = this.props;
        const { text } = this.state;
        if (text) {
            this.setState({
                text: ""
            });
            dispatch(addCard(listID, text));
        }
    };
    renderForm = () => {
        const { list } = this.props;
        const buttonTitle = list ? "Add List" : "Add Card";
        return <Form 
            list={list} 
            text={this.state.text}
            closeForm={this.closeForm} 
            onClick={list ? this.handleAddList : this.handleAddCard}
            onChange={this.handleInputChange} 
            buttonTitle={buttonTitle} />;
    };
    renderAddButton = () => {
        const { list } = this.props;
        const buttonText = list ? "Add another list" : "Add another card";
        return (<OpenForm list={list} children={buttonText} openForm={this.openForm}></OpenForm>);
    };
    render() {
        return this.state.formOpen ? this.renderForm() : this.renderAddButton();
    }
}

 
export default connect() (ActionButton); 