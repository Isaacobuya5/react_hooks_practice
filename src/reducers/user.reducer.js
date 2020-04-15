import {actionTypes} from "../actions/actionTypes";

export function userReducer(state, action) {
switch (action.type) {
    case actionTypes.LOGIN:
    case actionTypes.REGISTER:
        return action.username;
    case actionTypes.LOGOUT:
        return '';
    default:
        throw new Error();
}
}