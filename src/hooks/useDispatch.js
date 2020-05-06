import { useContext } from "react";

import { StateContext } from "../contexts";

export function useDispatch() {
    const { dispatch } = useContext(StateContext);
    return dispatch;
}