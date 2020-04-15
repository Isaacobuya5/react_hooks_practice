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
export function registerUserAction(username,password,confirmPassword) {
    return {
        type: actionTypes.REGISTER,
        username,
        password,
        confirmPassword
    }
}

// Logout ACTION
export function logoutUser() {
    return {
        type: actionTypes.LOGOUT
    }
}