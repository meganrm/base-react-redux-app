import { TypeToDescriptionMap } from "../types";
import { makeReducer } from "../util";

import { RECEIVE_CONTENT } from "./constants";
import {
    ContentStateBranch,
    ReceiveAction,
} from "./types";

export const initialState = {
    content: [],
};

const typeToDescriptionMap: TypeToDescriptionMap = {
  [RECEIVE_CONTENT]: {
      accepts: (action): action is ReceiveAction => action.type === RECEIVE_CONTENT,
      perform: (state: ContentStateBranch, action: ReceiveAction) => ({
          ...state,
          content: [...state.content, ...action.payload],
      }),
  },
};

export default makeReducer<ContentStateBranch>(typeToDescriptionMap, initialState);
