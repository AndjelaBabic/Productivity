import { CONSTANTS } from "../actions";
import {uuid} from "uuidv4";

export const setActiveBoard = id => {
  return {
    type: CONSTANTS.SET_ACTIVE_BOARD,
    payload: id
  };
};

export const addBoard = title => {
  const id = uuid();
  return {
    type: CONSTANTS.ADD_BOARD,
    payload: {title, id}
  };
};

export const fetchBoards = payload =>  {
  return {
    type: CONSTANTS.LOAD_BOARD,
    payload
  };
};

export const fetchBoardOrder = payload =>  {
  return {
    type: CONSTANTS.LOAD_BOARD_ORDER,
    payload
  };
};