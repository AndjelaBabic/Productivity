import { CONSTANTS } from "../actions";

const initialState = [];

const boardOrderReducer = (state = initialState, action) => {
  console.log(state);
    switch (action.type) {
      case CONSTANTS.LOAD_BOARD_ORDER: {
        return action.payload;
      }

    case CONSTANTS.ADD_BOARD: {
      return [...state, `board-${action.payload.id}`];
    }
    default:
      return state;
  }
};

export default boardOrderReducer;