import React from "react"
import { ListOfPosts } from "../../models/listOfPosts/listOfPosts"

export interface PostListProps {
    listOfPostsModel: ListOfPosts
    postOnClick: (postId: number) => void
}

export const PostList = React.memo((props: PostListProps) => {
    return (
        <div>
            {props.listOfPostsModel.posts.map(postModel => {
                return (
                    <div key={postModel.id} className="post">
                        {postModel.title}
                    </div>
                )
            })}
        </div>
    )
})
