import {CONSTANTS} from "../actions"; 

let listID = 3;
let cardID = 10; 

const initialState = [
    {
        title: "Last Episode",
        id: `list-${0}`, 
        cards: [
            {
                id: `card-${0}`,
                text: "some card 1"
            },
            {
                id: `card-${1}`,
                text: "some card 2"
            }
        ]
    },
    {
        title: "This Episode",
        id: `list-${1}`, 
        cards: [
            {
                id: `card-${4}`,
                text: "Mad men"
            },
            {
                id: `card-${5}`,
                text: "Suits"
            },
            {
                id: `card-${6}`,
                text: "Breaking bad"
            }
        ]
    },
    {
        title: "This Episode",
        id: `list-${2}`, 
        cards: [
            {
                id: `card-${7}`,
                text: "Mad men"
            },
            {
                id: `card-${8}`,
                text: "Suits"
            },
            {
                id: `card-${9}`,
                text: "Breaking bad"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type){
        case CONSTANTS.ADD_LIST:
            const newList = {
                title: action.payload, 
                cards: [], 
                id: `list-${listID}`,
            };
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: `card-${cardID}`,
                text: action.payload.text
            };
            cardID += 1;

            const newState = state.map(list => {
                if(list.id === action.payload.listID){
                    return {
                        id: list.id,
                        title: list.title, 
                        cards: [...list.cards, newCard]
                    };
                    
                } else{
                    return list; 
                }
            });
            console.log(newState);
            return newState; 
        case CONSTANTS.DRAG_HAPPEND: 
        {
            const {
                droppableIdStart, 
                droppableIdEnd, 
                droppableIndexStart, 
                droppableIndexEnd, 
                type
            } = action.payload; 
            const newState = [...state]; 

            // dragging lists around 
            if(type === "list"){
                const list = newState.splice(droppableIndexStart, 1);
                newState.splice(droppableIndexEnd, 0, ...list);
                return newState; 
            }
            // in the same list (drag and drop)
            if(droppableIdStart === droppableIdEnd){
                const list = state.find(list => droppableIdStart === list.id);
                // delete 1 on the given index, returns deleted card 
                const card = list.cards.splice(droppableIndexStart, 1); 
                // add card on the given index, do not delete anything
                list.cards.splice(droppableIndexEnd, 0, ...card);
            }
            if(droppableIdStart !== droppableIdEnd){
                // find the list where the drag happend
                const listStart = state.find(list => droppableIdStart === list.id);
                // pull out the card from this list
                const card = listStart.cards.splice(droppableIndexStart, 1); 
                // find the list where drag ended
                const listEnd = state.find(list => droppableIdEnd === list.id);
                // add card on the end list
                listEnd.cards.splice(droppableIndexEnd, 0, ...card);
            }
            return newState;
        } 
        case CONSTANTS.EDIT_CARD: {
            const { cardID, listID, newText } = action.payload;
            return state.map(list => {
              if (list.id === listID) {
                const newCards = list.cards.map(card => {
                  if (card.id === cardID) {
                    card.text = newText;
                    return card;
                  }
                  return card;
                });
                return { ...list, cards: newCards };
              }
              return list;
            });
          }
        case CONSTANTS.DELETE_CARD: {
            console.log(action);
            const { cardID, listID } = action.payload;
            return state.map(list => {
              if (list.id === listID) {
                const newCards = list.cards.filter(card => card.id !== cardID);
                return { ...list, cards: newCards };
              } else {
                return list;
              }
            });
        }
        case CONSTANTS.EDIT_LIST_TITLE: {
            console.log(action);
            const { listID, listTitle } = action.payload;
            return state.map(list => {
              if (list.id === listID) {
                list.title = listTitle;
                return list;
              } else {
                return list;
              }
            });
          }
        
        default: 
        return state; 
    }
};

export default listsReducer; 