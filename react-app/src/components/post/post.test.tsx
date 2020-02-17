import React from "react"
import { shallow } from "enzyme"
import { Post as PostModel } from "../../models/post/post"
import { Post } from "./post"
import { getMockPostData } from "../../models/post/post.test"
import { getMockUserData } from "../../models/user/user.test"
import { ViewMode } from "../../App"
import { CardBody } from "reactstrap"

test("renders without crashing", () => {
    const postData = getMockPostData()
    const userData = getMockUserData()
    const postModel = new PostModel(postData, userData)
    const post = shallow(<Post postModel={postModel} viewMode={ViewMode.PostList} />)
    expect(post.exists()).toBe(true)
})

test("read post button triggers onClick function", () => {
    const postData = getMockPostData()
    const userData = getMockUserData()
    const postModel = new PostModel(postData, userData)
    let buttonClicked = false
    const handleClick = () => {
        buttonClicked = true
    }
    const post = shallow(<Post postModel={postModel} viewMode={ViewMode.PostList} onClick={handleClick} />)
    expect(buttonClicked).toBe(false)
    post.find(".read-post-button").simulate("click")
    expect(buttonClicked).toBe(true)
})

test("read post button not rendered without onClick handler", () => {
    const postData = getMockPostData()
    const userData = getMockUserData()
    const postModel = new PostModel(postData, userData)
    const post = shallow(<Post postModel={postModel} viewMode={ViewMode.PostList} />)
    expect(post.find(".read-post-button").exists()).toBe(false)
})

test("post body rendered in post details view", () => {
    const postData = getMockPostData()
    const userData = getMockUserData()
    const postModel = new PostModel(postData, userData)
    const post = shallow(<Post postModel={postModel} viewMode={ViewMode.PostDetails} />)
    expect(post.find(CardBody).exists()).toBe(true)
})
