import {CONSTANTS} from "../actions";

let listID = 0;
let boardID = 1;

const initialState = [
    {
        id: "board-0",
        lists: ["list-0"],
        title: "myboard"
    }
]

const boardsReducer = (state = initialState, action) => {
    console.log(action);
    switch(action.type){
        case CONSTANTS.ADD_BOARD: {
            boardID += 1; 
            const title = action.payload;
            const newID = `board-${boardID}`;
            const newBoard = {
                id: newID,
                title,
                lists: []
              };
              return { ...state, newBoard };

        }

        default:
             return state; 
    }
}

export default boardsReducer;