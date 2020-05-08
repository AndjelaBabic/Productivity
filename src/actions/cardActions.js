import { CONSTANTS} from "../actions"; 

export const addCard = (listID, text) => {
    return {
        type: CONSTANTS.ADD_CARD, 
        payload: {text, listID}
    }; 
};

export const editCard = (cardID, listID, newText) => {
    return {
        type: CONSTANTS.EDIT_CARD, 
        payload: {cardID, listID, newText}
    }; 
};