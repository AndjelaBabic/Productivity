import { CONSTANTS} from "../actions"; 


export const setUser = (user) => {
    return {
        type: CONSTANTS.SET_LOGGED_IN_USER, 
        payload: user
    }; 
};

export const logoutUser = () => {
    return {
        type: CONSTANTS.LOGOUT, 
    }; 
};