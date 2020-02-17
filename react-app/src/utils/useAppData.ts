import { UserApiInterface } from "../apiInterface/userApiInterface";
import { PostApiInterface } from "../apiInterface/postApiInterface";
import { CommentApiInterface } from "../apiInterface/commentApiInterface";
import { useState, useEffect } from "react";
import { getAppData } from "./getAppData";

export interface AppDataInterface {
    areUsersLoaded: boolean
    arePostsLoaded: boolean
    areCommentsLoaded: boolean
    users: UserApiInterface[]
    posts: PostApiInterface[]
    comments: CommentApiInterface[]
}

export const useAppData = (refreshCounter: number) => {
    const initialState: AppDataInterface = {
        areUsersLoaded: false,
        arePostsLoaded: false,
        areCommentsLoaded: false,
        users: [],
        posts: [],
        comments: []
    }

    const [state, setState] = useState(initialState)

    useEffect(() => {
        getAppData("users", (response) => {
            const usersFromResponse = response || []
            const areUsersLoaded = response ? true : false

            setState(prevState => {
                const newState = { ...prevState }
                newState.users = usersFromResponse as UserApiInterface[]
                newState.areUsersLoaded = areUsersLoaded

                return newState
            })
        })

        getAppData("posts", (response) => {
            const postsFromResponse = response || []
            const arePostsLoaded = response ? true : false

            setState(prevState => {
                const newState = { ...prevState }
                newState.posts = postsFromResponse as PostApiInterface[]
                newState.arePostsLoaded = arePostsLoaded

                return newState
            })
        })

        getAppData("comments", (response) => {
            const commentsFromResponse = response || []
            const areCommentsLoaded = response ? true : false

            setState(prevState => {
                const newState = { ...prevState }
                newState.comments = commentsFromResponse as CommentApiInterface[]
                newState.areCommentsLoaded = areCommentsLoaded

                return newState
            })
        })
    }, [ refreshCounter ])

    return state
}
