import {CONSTANTS } from "../actions"; 
import { addList, editListTitle, editCardList, deleteList } from "../util/APIUtil";

const initialState = {};

const listsReducer = (state = initialState, action) => {
    console.log(action);
    switch (action.type){
        case CONSTANTS.LOAD_LISTS: {
            return action.payload;
          }
        case CONSTANTS.ADD_LIST:{
            const { title, boardID, id } = action.payload;
            const newList = {
                title: title, 
                cards: [], 
                id: `list-${id}`,
                board: boardID
            };
            let listToAdd = {}; 
            listToAdd.listid = newList.id; 
            listToAdd.title = newList.title; 
            listToAdd.boardid=  newList.board; 
            addList(listToAdd); 
            return {...state, [newList.id]: newList};
        }
        case CONSTANTS.ADD_CARD:{
            const { listID, id } = action.payload;
            const list = state[listID];
            list.cards.push(`card-${id}`);
            return { ...state, [listID]: list };
        }
        case CONSTANTS.DRAG_HAPPEND: {
            const {
                droppableIdStart, 
                droppableIdEnd, 
                droppableIndexStart, 
                droppableIndexEnd, 
                type
            } = action.payload; 

            // dragging lists around 
            if(type === "list"){
                return state; 
            }
            // in the same list (drag and drop)
            if(droppableIdStart === droppableIdEnd){
                const list = state[droppableIdStart];
                // delete 1 on the given index, returns deleted card 
                const card = list.cards.splice(droppableIndexStart, 1); 
                // add card on the given index, do not delete anything
                list.cards.splice(droppableIndexEnd, 0, ...card);
                return { ...state, [droppableIdStart]: list };
            }
            // card moved to different list
            if(droppableIdStart !== droppableIdEnd){
                // find the list where the drag happend
                const listStart = state[droppableIdStart];
                // pull out the card from this list
                const card = listStart.cards.splice(droppableIndexStart, 1); 
                // find the list where drag ended
                const listEnd = state[droppableIdEnd];
                // add card on the end list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);

                let cardToUpdate = {}; 
                cardToUpdate.cardid = card[0]; 
                cardToUpdate.listid = listEnd.id; 
                editCardList(cardToUpdate); 
                return {
                    ...state,
                    [droppableIdStart]: listStart,
                    [droppableIdEnd]: listEnd
                  };
            }
            return state; 
        } 
        case CONSTANTS.DELETE_CARD: {
            const { cardID, listID } = action.payload;
            const list = state[listID]; 
            const newCards = list.cards.filter(id => id !== cardID);
            return { ...state, [listID]: { ...list, cards: newCards } };
        }
        case CONSTANTS.EDIT_LIST_TITLE: {
            const { listID, listTitle } = action.payload;
            const list = state[listID];
            list.title = listTitle;
            let listToEdit = {}; 
            listToEdit.listid = list.id; 
            listToEdit.title = list.title; 
            editListTitle(listToEdit); 
            return { ...state, [listID]: list };
          }
        
          case CONSTANTS.DELETE_LIST: {
            const { listID } = action.payload;
            const newState = state;
            delete newState[listID];
            let listToDelete = {}; 
            listToDelete.listid = listID;
            deleteList(listToDelete);
            return newState;      
          }
        
        default: 
        return state; 
    }
};

export default listsReducer; 