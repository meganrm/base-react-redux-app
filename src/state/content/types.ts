export interface Content {
    content_id: number;
    content_category_type_id: number;
    content_path: string;
    content_source_id: number;
    content_type_id: number;
    end_date: string;
    mitotic_state_id: number;
    start_date: string;
}

export interface ContentStateBranch {
    content: Content[];
}

export interface ReceiveAction {
    payload: Content[];
    type: string;
}

export type Action = ReceiveAction;
