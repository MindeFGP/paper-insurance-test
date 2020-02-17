import { CommentApiInterface } from "../../apiInterface/commentApiInterface"
import { Comment as CommentModel } from "./comment"


test("constructs model correctly from api data", () => {
    const commentData = getMockCommentData()
    const commentModel = new CommentModel(commentData)
    expect(commentModel.id).toBe(1)
    expect(commentModel.postId).toBe(1)
    expect(commentModel.name).toBe("test commenter")
    expect(commentModel.email).toBe("test@commenter.com")
    expect(commentModel.body).toBe("hello everyone")
})

export const getMockCommentData = (): CommentApiInterface => {
    return {
        id: 1,
        postId: 1,
        name: "test commenter",
        email: "test@commenter.com",
        body: "hello everyone"
    }
}
