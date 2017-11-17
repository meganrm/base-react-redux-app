export interface User {
    id: number;
    name: string;
    address: {
        city: string;
        geo: {lat: string, lng: string};
        street: string;
        suite: string;
        zipcode: string;

    };
    company: {
        bs: string;
        catchPhrase: string;
        name: string;
    };
    email: string;
    phone: string;
    username: string;
    website: string;
}

export interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}

export interface ToDo {
    complete: boolean;
    id: number;
    title: string;
    userId: number;
}

export interface MenuElement {
    id: number;
    title: string;
}

export interface MetadataStateBranch {
    users_data: User[];
    posts_data: Post[];
    todos_data: ToDo[];
}

export interface ReceiveAction {
    payload: Partial<MetadataStateBranch>;
    type: string;
}

export interface RequestAction {
    type: string;
}

export type Action = ReceiveAction | RequestAction;
