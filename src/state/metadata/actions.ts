import {
    RECEIVE_METADATA,
    REQUEST_CELL_MODEL_METADATA,
} from "./constants";
import {
    MetadataStateBranch,
    ReceiveAction,
    RequestAction,
} from "./types";

export function receiveMetadata(payload: Partial<MetadataStateBranch>): ReceiveAction {
    return {
        payload,
        type: RECEIVE_METADATA,
    };
}

export function requestCellModelMetadata(): RequestAction {
    return {
        type: REQUEST_CELL_MODEL_METADATA,
    };
}
