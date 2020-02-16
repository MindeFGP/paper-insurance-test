import React from "react"
import { ListOfPosts } from "../../models/listOfPosts/listOfPosts"

export interface PostListProps {
    listOfPosts: ListOfPosts
    postOnClick: (postId: number) => void
}

export const PostList = React.memo((props: PostListProps) => {
    return (
        <div>

        </div>
    )
})
