import { CONSTANTS } from "../actions";
import { loadBoardOrder } from "../util/APIUtil";

const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONSTANTS.LOAD_DATA: {
        let newState = {}; 
        loadBoardOrder().then(function (result) {
          result.forEach(element => {
            newState =[...newState, `${element}`];
          });
          console.log(newState);
          return newState;    
        });
        return {};
      }

    case CONSTANTS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default boardOrderReducer;