import { User } from "../models/user/user"

const postToServer = (table: string, data: any, callBack: () => void) => {
    const serverUrl = "http://localhost:3000"
    
    let postUrl = serverUrl + "/" + table

    const xhr = new XMLHttpRequest()
    xhr.open("POST", postUrl, true)
    xhr.setRequestHeader('Content-Type', 'application/json; charset=UTF-8')
    xhr.send(JSON.stringify(data))

    xhr.onloadend = () => {
        callBack()
    }
}

export const postCommentToServer = (user: User, postId: number, message: string, callBack: () => void) => {
    const commentData = {
        postId: postId,
        name: user.name,
        email: user.email,
        body: message
    }

    postToServer("comments", commentData, callBack)
}
