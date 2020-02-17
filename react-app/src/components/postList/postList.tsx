import React from "react"
import { ListOfPosts } from "../../models/listOfPosts/listOfPosts"
import { Post } from "../post/post"
import { ViewMode } from "../../App"

export interface PostListProps {
    listOfPostsModel: ListOfPosts
    postOnClick: (postId: number) => void
    heading: string
}

export const PostList = React.memo((props: PostListProps) => {
    return (
        <div>
            <h2>{props.heading}</h2>
            {props.listOfPostsModel.posts.map(postModel => {
                return (
                    <Post key={postModel.id} postModel={postModel} viewMode={ViewMode.PostList} onClick={() => { props.postOnClick(postModel.id) }} />
                )
            })}
        </div>
    )
})
