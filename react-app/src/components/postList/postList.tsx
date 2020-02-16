import React from "react"
import { ListOfPosts } from "../../models/listOfPosts/listOfPosts"
import { Post } from "../post/post"

export interface PostListProps {
    listOfPostsModel: ListOfPosts
    postOnClick: (postId: number) => void
}

export const PostList = React.memo((props: PostListProps) => {
    return (
        <div>
            {props.listOfPostsModel.posts.map(postModel => {
                return (
                    <Post key={postModel.id} postModel={postModel} onClick={() => { props.postOnClick(postModel.id) }} />
                )
            })}
        </div>
    )
})
