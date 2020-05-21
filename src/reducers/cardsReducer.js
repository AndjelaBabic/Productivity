import { CONSTANTS } from "../actions";
import { addCard, editCardTitle, deleteCard, loadCards } from "../util/APIUtil";

const initialState = {};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.LOAD_DATA: {
      let newState = {}; 
      loadCards().then(function (result) {
        result.forEach(element => {
          let newCard = {};
          newCard.id = element.cardid; 
          newCard.text = element.title; 
          newCard.list = element.listid;
          newState = { ...newState, [ `${newCard.id}`]: newCard };
        });
        console.log(newState);
        return newState;    
      });
      return newState; 
    }

    case CONSTANTS.ADD_CARD: {
        const { text, listID, id } = action.payload;

        const newCard = {
          text,
          id: `card-${id}`,
          list: listID
        };

        let cardToInsert = {};
        cardToInsert.cardid = newCard.id; 
        cardToInsert.title = newCard.text;
        cardToInsert.listid = newCard.list;   
        addCard(cardToInsert); 
        return { ...state, [`card-${id}`]: newCard };
    }
    case CONSTANTS.EDIT_CARD: {
        const { cardID, newText } = action.payload;
        const card = state[cardID];
        card.text = newText;
        let cardToEdit = {}; 
        cardToEdit.cardid = cardID; 
        cardToEdit.title = card.text; 
        editCardTitle(cardToEdit); 
        return { ...state, [`card-${cardID}`]: card };
      }
  
      case CONSTANTS.DELETE_CARD: {
        const { cardID } = action.payload;
        const newState = state;
        delete newState[cardID];
        let cardToDelete = {}; 
        cardToDelete.cardid = cardID; 
        deleteCard(cardToDelete); 
        return newState;
    }
    default:
        return state;
      
  }
};

export default cardsReducer;