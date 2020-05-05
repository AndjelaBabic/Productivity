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
            ,
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
            ,
            {
                id: 2, 
                text: "Breaking bad"
            }
        ]
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type){
        default: 
        return state; 
    }
};

export default listsReducer; 