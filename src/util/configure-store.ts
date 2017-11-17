import axios from "axios";
import {
    applyMiddleware,
    combineReducers,
    createStore,
} from "redux";
import { createLogicMiddleware } from "redux-logic";

import { BASE_API_URL } from "../constants";
import {
    content,
    metadata,
    selections,
} from "../state";

const reducers = {
    content: content.reducer,
    metadata: metadata.reducer,
    selections: selections.reducer,
};

const logics = [
    ...metadata.logics,
];

const reduxLogicDependencies = {
    baseApiUrl: BASE_API_URL,
    httpClient: axios,
};

const logicMiddleware = createLogicMiddleware(logics, reduxLogicDependencies);
const middleware = applyMiddleware(logicMiddleware);

export default function createReduxStore(initialState?: {}) {
    const rootReducer = combineReducers(reducers);
    if (initialState) {
        return createStore(rootReducer, initialState, middleware);
    }
    return createStore(rootReducer, middleware);
}
