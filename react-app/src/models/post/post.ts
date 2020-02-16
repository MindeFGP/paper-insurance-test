import { PostApiInterface } from "../../apiInterface/postApiInterface"

export interface PostModelInterface {
    id: number
    title: string
    body: string
}

export class Post implements PostModelInterface {
    id: number
    title: string
    body: string

    constructor(postData: PostApiInterface) {
        this.id = postData.id
        this.title = postData.title
        this.body = postData.body
    }
}
