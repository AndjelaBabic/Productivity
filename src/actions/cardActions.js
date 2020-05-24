import { CONSTANTS} from "../actions"; 
import {uuid} from "uuidv4";

export const addCard = (listID, text) => {
    const id = uuid();
    return {
        type: CONSTANTS.ADD_CARD, 
        payload: {text, listID, id}
    }; 
};

export const editCard = (cardID, listID, newText) => {
    return {
        type: CONSTANTS.EDIT_CARD, 
        payload: {cardID, listID, newText}
    }; 
};

export const deleteCard = (cardID, listID) => {
    return {
        type: CONSTANTS.DELETE_CARD, 
        payload: {cardID, listID}
    }; 
};

export const fetchCards = payload =>  {
    return {
      type: CONSTANTS.LOAD_CARDS,
      payload
    };
  };