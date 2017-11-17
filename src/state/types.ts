import { AxiosInstance } from "axios";

export interface ReduxLogicDeps {
    baseApiUrl: string;
    httpClient: AxiosInstance;
}

export interface ActionDescription {
    accepts: (action: any) => boolean;
    perform: (state: any, action: any) => any;
}

export interface TypeToDescriptionMap {
    [propName: string ]: ActionDescription;
}
