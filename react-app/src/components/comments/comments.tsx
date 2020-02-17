import React from "react"
import { Comment as CommentModel } from "../../models/comment/comment"
import { Comment } from "../comment/comment"

export interface CommentsProps {
    heading: string
    onSubmit: (value: string) => void
    listOfCommentModels: CommentModel[]
}

export const Comments = React.memo((props: CommentsProps) => {
    return (
        <div>
            <h2>{props.heading}</h2>
            {props.listOfCommentModels.map(commentModel => {
                return (
                    <Comment key={commentModel.id} commentModel={commentModel} />
                )
            })}
        </div>
    )
})
