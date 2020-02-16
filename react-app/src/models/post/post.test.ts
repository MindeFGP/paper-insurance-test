import { Post } from "./post"
import { PostApiInterface } from "../../apiInterface/postApiInterface"

test("constructs model correctly from api data", () => {
    const postApiData: PostApiInterface = getMockPostData()
    const postModel = new Post(postApiData)
    expect(postModel.id).toBe(6)
    expect(postModel.title).toBe("test title")
    expect(postModel.body).toBe("test body")
})

export const getMockPostData = (): PostApiInterface => {
    return {
        id: 6,
        userId: 1,
        title: "test title",
        body: "test body"
    }
}