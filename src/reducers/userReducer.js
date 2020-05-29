import { CONSTANTS } from "../actions";

const initialState = {
    isAuthenticated: false
}; 

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
      case CONSTANTS.LOGOUT:{
          return {
            isAuthenticated: false
          }; 
      }

    default:
      return state;
  }
};

export default userReducer;