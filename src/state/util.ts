import { AnyAction } from "redux";
import { TypeToDescriptionMap } from "./types";

const NAMESPACE = "VISUAL_CELL";

export function makeConstant(associatedReducer: string, actionType: string) {
    return `${NAMESPACE}/${associatedReducer.toUpperCase()}/${actionType.toUpperCase()}`;
}

export function makeReducer<S>(typeToDescriptionMap: TypeToDescriptionMap, initialState: S) {
    return (state: S = initialState, action: AnyAction) => {
        const description = typeToDescriptionMap[action.type];
        if (!description) {
            return state;
        }

        if (description.accepts(action)) {
            return description.perform(state, action);
        }

        return state;
    };
}
