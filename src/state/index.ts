export { default as content } from "./content";
export { default as metadata } from "./metadata";
export { default as selections } from "./selections";

import { ContentStateBranch } from "./content/types";
import { MetadataStateBranch } from "./metadata/types";
import { SelectionStateBranch } from "./selections/types";

export interface State {
    content: ContentStateBranch;
    metadata: MetadataStateBranch;
    selections: SelectionStateBranch;
}
