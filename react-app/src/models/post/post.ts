import { PostApiInterface } from "../../apiInterface/postApiInterface"
import { User } from "../user/user"
import { UserApiInterface } from "../../apiInterface/userApiInterface"
import { Comment } from "../comment/comment"
import { CommentApiInterface } from "../../apiInterface/commentApiInterface"

export interface PostModelInterface {
    id: number
    title: string
    body: string
    author: User
    comments: Comment[]
}

export class Post implements PostModelInterface {
    id: number
    title: string
    body: string
    author: User
    comments: Comment[] = []

    constructor(postData: PostApiInterface, authorData: UserApiInterface, commentsData: CommentApiInterface[]) {
        this.id = postData.id
        this.title = postData.title
        this.body = postData.body

        this.author = new User(authorData)

        commentsData.forEach(commentData => {
            if (commentData.postId === postData.id) {
                const comment = new Comment(commentData)
                this.comments.push(comment)
            }
        })
    }

    getCommentsSorted = (): Comment[] => {
        return this.comments.sort((a, b) => (a.id < b.id) ? 1 : -1)
    }
}
