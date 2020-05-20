import { CONSTANTS } from "../actions";
import { addCard } from "../util/APIUtil";

const initialState = {
  "card-0": {
    text: "Last Episode",
    id: `card-0`,
    list: "list-0"
  }
};

const cardsReducer = (state = initialState, action) => {
  switch (action.type) {
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
        return { ...state, [`card-${cardID}`]: card };
      }
  
      case CONSTANTS.DELETE_CARD: {
        const { cardID } = action.payload;
        const newState = state;
        delete newState[cardID];
        return newState;
    }
    default:
        return state;
      
  }
};

export default cardsReducer;