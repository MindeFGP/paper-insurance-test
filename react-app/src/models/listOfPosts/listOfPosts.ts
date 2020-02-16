import { Post } from "../post/post"
import { AppDataInterface } from "../../utils/useAppData"

export interface ListOfPostsModelInterface {
    posts: Post[]
}

export class ListOfPosts implements ListOfPostsModelInterface {
    posts: Post[] = []

    constructor(appData: AppDataInterface) {
        appData.posts.forEach(postData => {
            const post = new Post(postData)
            this.posts.push(post)
        })
    }
}
