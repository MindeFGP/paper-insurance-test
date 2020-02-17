import React, { useState } from "react"
import { Comment as CommentModel } from "../../models/comment/comment"
import { Comment } from "../comment/comment"
import { Form, FormGroup, Input, Button, Label } from "reactstrap"
import "./comments.css"

export interface CommentsProps {
    heading: string
    onSubmit: (value: string) => void
    listOfCommentModels: CommentModel[]
}

export const Comments = React.memo((props: CommentsProps) => {
    const initialState = { commentInputValue: "" }
    const [ state, setState ] = useState(initialState)

    const handleCommentInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ commentInputValue: event.target.value })
    }

    const handleCommentSubmit = () => {
        if (state.commentInputValue !== "") {
            props.onSubmit(state.commentInputValue)
            setState({ commentInputValue: "" })
        }
    }

    return (
        <div>
            <h2>{props.heading}</h2>

            <div className="add-comment-section">
                <Form>
                    <Label>Add comment:</Label>
                    <FormGroup>
                        <Input type="text" value={state.commentInputValue} onChange={handleCommentInputChange} />
                    </FormGroup>
                    <Button className="btn btn-primary" onClick={handleCommentSubmit}>Add comment</Button>
                </Form>
            </div>

            {props.listOfCommentModels.map(commentModel => {
                return (
                    <Comment key={commentModel.id} commentModel={commentModel} />
                )
            })}
        </div>
    )
})
