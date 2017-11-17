import { TypeToDescriptionMap } from "../types";
import { makeReducer } from "../util";

import { RECEIVE_METADATA } from "./constants";
import {
    MetadataStateBranch,
    ReceiveAction,
} from "./types";

export const initialState = {
    posts_data: [],
    todos_data: [],
    users_data: [],
};

const actionToConfigMap: TypeToDescriptionMap = {
    [RECEIVE_METADATA]: {
        accepts: (action): action is ReceiveAction => action.type === RECEIVE_METADATA,
        perform: (state: MetadataStateBranch, action: ReceiveAction) => ({ ...state, ...action.payload }),
    },
};

export default makeReducer<MetadataStateBranch>(actionToConfigMap, initialState);
