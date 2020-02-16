import React from "react"
import { Post as PostModel } from "../../models/post/post"
import { Card, CardHeader } from "reactstrap"

export interface PostProps {
    postModel: PostModel
    onClick?: () => void
}

export const Post = React.memo((props: PostProps) => {
    const readPostButton = props.onClick && (
        <button className="btn btn-primary read-post-button" onClick={props.onClick}>
            Read post...
        </button>
    )
    
    return (
        <Card>
            <CardHeader>
                <div className="row">
                    <div className="col-8">
                        // place for author details
                    </div>
                    <div className="col-4">
                        <div className="float-right">
                            {readPostButton}
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12">
                        {props.postModel.title}
                    </div>
                </div>
            </CardHeader>
        </Card>
    )
})
