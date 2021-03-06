import { CONSTANTS} from "../actions"; 
import {uuid} from "uuidv4";

export const addList = (title) => {
    const id = uuid();
    return (dispatch, getState) => {
        const boardID = getState().activeBoard;
        dispatch({
          type: CONSTANTS.ADD_LIST,
          payload: { title, boardID, id }
        }); 
    }   
};

export const sort = (
    droppableIdStart, 
    droppableIdEnd, 
    droppableIndexStart, 
    droppableIndexEnd, 
    draggableId,
    type
) => {
    return (dispatch, getState) => {
        const boardID = getState().activeBoard;
        dispatch({
          type: CONSTANTS.DRAG_HAPPEND,
          payload: {
            droppableIdStart,
            droppableIdEnd,
            droppableIndexEnd,
            droppableIndexStart,
            draggableId,
            type,
            boardID
          }
        });
    }; 
};

export const editListTitle = (
    listID, 
    listTitle
) => {
    return {
        type: CONSTANTS.EDIT_LIST_TITLE, 
        payload: {
            listID, 
            listTitle
        }
    }; 
}

export const deleteList = listID => {
    return (dispatch, getState) => {
        const boardID = getState().activeBoard;
        return dispatch({
          type: CONSTANTS.DELETE_LIST,
          payload: {
            listID,
            boardID
          }
    });
  };
};

export const fetchLists = payload =>  {
  return {
    type: CONSTANTS.LOAD_LISTS,
    payload
  };
};
