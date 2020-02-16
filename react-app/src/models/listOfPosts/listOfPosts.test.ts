import { AppDataInterface } from "../../utils/useAppData"
import { ListOfPosts } from "./listOfPosts"
import { PostApiInterface } from "../../apiInterface/postApiInterface"
import { getMockPostData } from "../post/post.test"

test("constructs model from app data without crashing", () => {
    const appData: AppDataInterface = {
        areUsersLoaded: true,
        arePostsLoaded: true,
        areCommentsLoaded: true,
        users: [],
        posts: [],
        comments: []
    }
    const listOfPostsModel = new ListOfPosts(appData)
    expect(listOfPostsModel.posts.length).toBe(0)
})

test("constructs model from app data correctly", () => {
    const mockPost: PostApiInterface = getMockPostData()
    const appData: AppDataInterface = {
        areUsersLoaded: true,
        arePostsLoaded: true,
        areCommentsLoaded: true,
        users: [],
        posts: [ mockPost ],
        comments: []
    }
    const listOfPostsModel = new ListOfPosts(appData)
    expect(listOfPostsModel.posts.length).toBe(1)
})
