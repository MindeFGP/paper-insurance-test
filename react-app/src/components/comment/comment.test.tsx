import React from "react"
import { Comment as CommentModel } from "../../models/comment/comment"
import { Comment } from "./comment"
import { getMockCommentData } from "../../models/comment/comment.test"
import { shallow } from "enzyme"

test("renders without crashing", () => {
    const commentData = getMockCommentData()
    const commentModel = new CommentModel(commentData)
    const comment = shallow(<Comment commentModel={commentModel} />)
    expect(comment.exists()).toBe(true)
})
