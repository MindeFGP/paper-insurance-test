import { PostApiInterface } from "../../apiInterface/postApiInterface"
import { User } from "../user/user"
import { UserApiInterface } from "../../apiInterface/userApiInterface"

export interface PostModelInterface {
    id: number
    title: string
    body: string
    author: User
}

export class Post implements PostModelInterface {
    id: number
    title: string
    body: string
    author: User

    constructor(postData: PostApiInterface, authorData: UserApiInterface) {
        this.id = postData.id
        this.title = postData.title
        this.body = postData.body

        this.author = new User(authorData)
    }
}
