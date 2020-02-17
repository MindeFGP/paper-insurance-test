import { AppDataInterface } from "../../utils/useAppData"
import { ListOfPosts } from "./listOfPosts"
import { getMockPostData } from "../post/post.test"
import { getMockUserData } from "../user/user.test"

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
    const appData = getMockAppDataWith3Posts()
    const listOfPostsModel = new ListOfPosts(appData)
    expect(listOfPostsModel.posts.length).toBe(3)
})

export const getMockAppDataWith3Posts = (): AppDataInterface => {
    const mockPost = getMockPostData()
    mockPost.id = 1
    const mockPost2 = getMockPostData()
    mockPost2.id = 2
    const mockPost3 = getMockPostData()
    mockPost2.id = 3
    const mockUser = getMockUserData()

    const appData: AppDataInterface = {
        areUsersLoaded: true,
        arePostsLoaded: true,
        areCommentsLoaded: true,
        users: [ mockUser ],
        posts: [ mockPost, mockPost2, mockPost3 ],
        comments: []
    }

    return appData
}
