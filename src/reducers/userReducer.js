import { CONSTANTS } from "../actions";

const initialState = {}; 

const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case CONSTANTS.SET_LOGGED_IN_USER: {
        const { email, password, isAuthenticated } = action.payload; 
        state = {
            email: email, 
            password: password, 
            isAuthenticated: isAuthenticated
        }
        return state;
      }

    default:
      return state;
  }
};

export default userReducer;