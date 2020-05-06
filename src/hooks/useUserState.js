import { useContext } from "react";

import { StateContext } from "../contexts";

export  function useUserState() {
    const { state } = useContext(StateContext);
    return state.user;
}