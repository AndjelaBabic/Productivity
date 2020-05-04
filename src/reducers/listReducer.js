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
    }
]

const listsReducer = (state = initialState, action) => {
    switch (action.type){
        default: 
        return state; 
    }
};

export default listsReducer; 