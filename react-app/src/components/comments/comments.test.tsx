import React from "react"
import { Comment as CommentModel } from "../../models/comment/comment"
import { Comment } from "../comment/comment"
import { Comments } from "./comments"
import { getMockCommentData } from "../../models/comment/comment.test"
import { shallow } from "enzyme"

test("renders without crashing", () => {
    const commentsData = getMockCommentData()
    const commentModel = new CommentModel(commentsData)
    const handleSubmit = (value: string) => {}
    const comments = shallow(<Comments heading="test heading" listOfCommentModels={[ commentModel ]} onSubmit={handleSubmit} />)
    expect(comments.exists()).toBe(true)
})

test("renders correct amount of comments", () => {
    const commentsData = getMockCommentData()
    const commentModel = new CommentModel(commentsData)
    const handleSubmit = (value: string) => {}
    const comments = shallow(<Comments heading="test heading" listOfCommentModels={[ commentModel, commentModel ]} onSubmit={handleSubmit} />)
    expect(comments.find(Comment).length).toBe(2)
})
