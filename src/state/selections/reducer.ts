import { values } from "lodash";

import { NavigationTab } from "../../constants";

import { TypeToDescriptionMap } from "../types";
import { makeReducer } from "../util";

import { SELECT_NAV_TAB } from "./constants";
import {
    Action,
    NavigationTabType,
    SelectionStateBranch,
} from "./types";

const typeToDescriptionMap: TypeToDescriptionMap = {
    [SELECT_NAV_TAB]: {
        accepts: (action: any): action is NavigationTabType =>
            values(NavigationTab).some((tab) => tab === action.payload),
        perform: (state: SelectionStateBranch, action: Action) => ({ ...state, navTab: action.payload }),
    },
};

export const initialState = {
    navTab: NavigationTab.FirstTab,
};

export default makeReducer<SelectionStateBranch>(typeToDescriptionMap, initialState);
