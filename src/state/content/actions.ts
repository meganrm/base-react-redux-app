import { RECEIVE_CONTENT } from "./constants";
import {
    Action,
    Content
} from "./types";

export function receiveContent(payload: Content[]): Action {
    return {
        payload,
        type: RECEIVE_CONTENT,
    };
}
