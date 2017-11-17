export interface Action {
    type: string;
    payload: any;
}

export type NavigationTabType = string;

export interface SelectionStateBranch {
    navTab: NavigationTabType;
}
