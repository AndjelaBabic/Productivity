import {CONSTANTS} from "../actions";

let listID = 0;
let boardID = 0;

const initialState = {
    "board-0": {
      id: "board-0",
      lists: ["list-0"],
      title: "myboard"
    }
  };

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
            boardID += 1;
            return { ...state, [newID]: newBoard };
        }

        case CONSTANTS.ADD_LIST: {
            const { boardID } = action.payload;
            const board = state[boardID];
            listID += 1;
            const newListID = `list-${listID}`;
            const newLists = [...board.lists, newListID];
            board.lists = newLists;
            return { ...state, [boardID]: board };
        }
        case CONSTANTS.DRAG_HAPPEND: {
            const { boardID } = action.payload;
            const board = state[boardID];
            const lists = board.lists;
            const {
              droppableIndexEnd,
              droppableIndexStart,
              type
            } = action.payload;
      
            // draggin lists around
            if (type === "list") {
            // remove 1 element on the given index
            const pulledOutList = lists.splice(droppableIndexStart, 1);
            // add pulledOutList on the given index
            lists.splice(droppableIndexEnd, 0, ...pulledOutList);
            board.lists = lists;
      
            return { ...state, [boardID]: board };
            }
            return state;
          }
          case CONSTANTS.DELETE_LIST: {
            const { listID, boardID } = action.payload;
            const board = state[boardID];
            const lists = board.lists;
            const newLists = lists.filter(id => id !== listID);
            board.lists = newLists;
            return { ...state, [boardID]: board };
          }

        default:
             return state; 
    }
}

export default boardsReducer;