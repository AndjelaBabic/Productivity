import {CONSTANTS} from "../actions";
import { addBoard } from "../util/APIUtil";

const initialState = {};

const boardsReducer = (state = initialState, action) => {
  console.log(state);
    console.log(action);
    switch(action.type){
        case CONSTANTS.LOAD_BOARD: {
          return action.payload; 
        }
        case CONSTANTS.ADD_BOARD: {
            const {title, id} = action.payload;
            const newID = `board-${id}`;
            const newBoard = {
              id: newID,
              title,
              lists: []
            };
            let board = {};
            board.boardId = newBoard.id;
            board.title = newBoard.title; 
            board.userId = 1; // TODO: change this later to currently logged in USER_ID 
            addBoard(board);
            return { ...state, [newID]: newBoard };
        }

        case CONSTANTS.ADD_LIST: {
            const { boardID, id } = action.payload;
            const board = state[boardID];
            const newListID = `list-${id}`;
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