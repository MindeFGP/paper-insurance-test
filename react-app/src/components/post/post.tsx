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
                <div className="row">
                    <div className="col-8">
                        <div>{props.postModel.title}</div>
                        <button onClick={props.onClick}>Read post...</button>
                    </div>
                    <div className="col-4"></div>
                </div>
            </CardHeader>
        </Card>
    )
})
