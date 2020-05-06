import {CONSTANTS} from "../actions"; 
import { CardMedia } from "@material-ui/core";

let listID = 2;
let cardID = 4; 

const initialState = [
    {
        title: "Last Episode",
        id: 0, 
        cards: [
            {
                id: 0, 
                text: "some card 1"
            },
            {
                id: 1, 
                text: "some card 2"
            }
        ]
    },
    {
        title: "This Episode",
        id: 1, 
        cards: [
            {
                id: 0, 
                text: "Mad men"
            },
            {
                id: 1, 
                text: "Suits"
            },
            {
                id: 2, 
                text: "Breaking bad"
            }
        ]
    },
    {
        title: "This Episode",
        id: 2, 
        cards: [
            {
                id: 0, 
                text: "Mad men"
            },
            {
                id: 1, 
                text: "Suits"
            },
            {
                id: 2, 
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
                id: listID
            };
            listID += 1;
            return [...state, newList];
        case CONSTANTS.ADD_CARD:
            const newCard = {
                id: cardID,
                text: action.payload.text
            };
            cardID += 1;

            const newState = state.map(list => {
                if(list.id == action.payload.listID){
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
        default: 
        return state; 
    }
};

export default listsReducer; 