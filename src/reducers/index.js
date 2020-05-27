import { combineReducers } from "redux"; 
import listsReducer from "./listReducer";
import boardsReducer from "./boardsReducer";
import boardOrderReducer from "./boardOrderReducer";
import activeBoardReducer from "./activeBoardReducer";
import cardsReducer from "./cardsReducer";
import userReducer from "./userReducer";

export default combineReducers({
    lists: listsReducer, 
    boards: boardsReducer,
    activeBoard: activeBoardReducer, 
    boardOrder: boardOrderReducer, 
    cards: cardsReducer, 
    user: userReducer
}); 