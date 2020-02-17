import React from "react"
import { Post as PostModel } from "../../models/post/post"
import { Card, CardHeader, CardBody } from "reactstrap"
import './post.css'
import { ViewMode } from "../../App"
import { Comments } from "../comments/comments"

export interface PostProps {
    postModel: PostModel
    onClick?: () => void
    viewMode: ViewMode
}

export const Post = React.memo((props: PostProps) => {
    const readPostButton = props.viewMode === ViewMode.PostList && props.onClick && (
        <button className="btn btn-primary read-post-button" onClick={props.onClick}>
            Read post...
        </button>
    )

    const handleCommentSubmit = (value: string) => {

    }
    
    return (
        <div>
            <Card className="post">
                <CardHeader>
                    <div className="row">
                        <div className="col-8">
                            <p>
                                <img className="author-photo" src={props.postModel.author.photoUrl} alt="" />
                                {props.postModel.author.name}
                            </p>
                        </div>
                        <div className="col-4">
                            <div className="float-right">
                                {readPostButton}
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-12 post-title">
                            {props.postModel.title}
                        </div>
                    </div>
                </CardHeader>
                {props.viewMode === ViewMode.PostDetails && (
                    <CardBody>
                        {props.postModel.body}
                    </CardBody>
                )}
            </Card>
            {props.viewMode === ViewMode.PostDetails && (
                <Comments heading="Comments" listOfCommentModels={props.postModel.comments} onSubmit={handleCommentSubmit} />
            )}
        </div>
    )
})
