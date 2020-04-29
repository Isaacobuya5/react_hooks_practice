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
export function registerUserAction(user) {
    return {
        type: actionTypes.REGISTER,
        user
    }
}

// Logout ACTION
export function logoutUser() {
    return {
        type: actionTypes.LOGOUT
    }
}