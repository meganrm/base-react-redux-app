import { SELECT_NAV_TAB } from "./constants";
import { Action } from "./types";

export function selectNavTab(payload: string): Action {
    return {
        payload,
        type: SELECT_NAV_TAB,
    };
}
