import { AxiosResponse } from "axios";
import { createLogic } from "redux-logic";

import { ReduxLogicDeps } from "../types";

import { receiveMetadata } from "./actions";
import { REQUEST_CELL_MODEL_METADATA } from "./constants";

const requestCellModelMetadata = createLogic({
    processOptions: {
        successType: receiveMetadata,
    },
    process(deps: ReduxLogicDeps) {
        const {
            baseApiUrl,
            httpClient,
        } = deps;

        return Promise.all([
            httpClient.get(`${baseApiUrl}/users`),
            httpClient.get(`${baseApiUrl}/posts`),
            httpClient.get(`${baseApiUrl}/todos`),
        ])
            .then(([
                users,
                posts,
                todos,
            ]: AxiosResponse[]) => ({
                posts_data: posts.data,
                todos_data: todos.data,
                users_data: users.data,
            }))
            .catch((reason) => {
                // TODO create Logger
                // tslint:disable-next-line
                console.log(reason);
            });
    },
    type: REQUEST_CELL_MODEL_METADATA,
});

export default [
    requestCellModelMetadata,
];
