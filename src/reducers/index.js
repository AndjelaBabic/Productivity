import { combineReducers } from "redux"; 
import listsReducer from "./listReducer";
import boardsReducer from "./boardsReducer";
import activeBoardReducer from "./activeBoardReducer";

export default combineReducers({
    lists: listsReducer, 
    boards: boardsReducer,
    activeBoard: activeBoardReducer
}); 