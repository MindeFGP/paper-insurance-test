import React from "react"
import { Comment as CommentModel } from "../../models/comment/comment"
import { CardHeader, CardBody, Card } from "reactstrap"
import "./comment.css"

export interface CommentProps {
    commentModel: CommentModel
}

export const Comment = React.memo((props: CommentProps) => {
    return (
        <div>
            <Card className="post-comment">
                <CardHeader>
                    {props.commentModel.name}
                </CardHeader>
                <CardBody>
                    {props.commentModel.body}
                </CardBody>
            </Card>
        </div>
    )
})
