import React from "react"
import { Post as PostModel } from "../../models/post/post"
import { Card, CardHeader } from "reactstrap"

export interface PostProps {
    postModel: PostModel
    onClick?: () => void
}

export const Post = React.memo((props: PostProps) => {
    return (
        <Card>
            <CardHeader>
                {props.postModel.title}
            </CardHeader>
        </Card>
    )
})
