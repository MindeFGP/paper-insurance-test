import { CommentApiInterface } from "../../apiInterface/commentApiInterface"

export interface CommentModelInterface {
    id: number
    postId: number
    name: string
    email: string
    body: string
}

export class Comment implements CommentModelInterface {
    id: number
    postId: number
    name: string
    email: string
    body: string

    constructor(commentData: CommentApiInterface) {
        this.id = commentData.id
        this.postId = commentData.postId
        this.name = commentData.name
        this.email = commentData.email
        this.body = commentData.body
    }
}
