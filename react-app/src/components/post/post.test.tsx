import React from "react"
import { shallow } from "enzyme"
import { Post as PostModel } from "../../models/post/post"
import { Post } from "./post"
import { getMockPostData } from "../../models/post/post.test"

test("renders without crashing", () => {
    const postData = getMockPostData()
    const postModel = new PostModel(postData)
    const post = shallow(<Post postModel={postModel} />)
    expect(post.exists()).toBe(true)
})
