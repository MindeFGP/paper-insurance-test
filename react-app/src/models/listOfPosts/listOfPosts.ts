import { Post } from "../post/post"
import { AppDataInterface } from "../../utils/useAppData"

export interface ListOfPostsModelInterface {
    posts: Post[]
}

export class ListOfPosts implements ListOfPostsModelInterface {
    posts: Post[] = []

    constructor(appData: AppDataInterface) {
        appData.posts.forEach(postData => {
            const authorData = appData.users.find(userData => {
                return userData.id === postData.userId
            })
            if (authorData) {
                const post = new Post(postData, authorData)
                this.posts.push(post)
            }
        })
    }
}
