import {actionTypes} from "./actionTypes";

// Login ACTION
export function loginUserAction(username, password) {
    return {
        type: actionTypes.LOGIN, 
        username,
        password
    }
}

// Register ACTION
export function registerUserAction(username,password) {
    return {
        type: actionTypes.REGISTER,
        username,
        password
    }
}

// Logout ACTION
export function logoutUser() {
    return {
        type: actionTypes.LOGOUT
    }
}