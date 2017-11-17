import { createSelector} from "reselect";

import { State } from "../";

import { NavigationTab } from "../../constants/index";
import { getNavTab } from "../selections/selectors";

import {
    MenuElement,
    Post,
    User,
} from "./types";

export const getUserData = (state: State) => state.metadata.users_data;
export const getPostData = (state: State) => state.metadata.posts_data;

export const getMenuData = createSelector<State, User[], Post[], string, MenuElement[]>(
    [getUserData, getPostData, getNavTab],
    (userData: User[], postData: Post[], selectedNavTab: string): MenuElement[] => {
        if (selectedNavTab === NavigationTab.FirstTab) {
            return userData.map((user: User) => (
                {
                    id: user.id,
                    title: user.name,
                }
            ));
        }
        return postData.map((post: Post) => (
                {
                    id: post.id,
                    title: post.title,
                }
            ));
    });
