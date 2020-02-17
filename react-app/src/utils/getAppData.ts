import { UserApiInterface } from "../apiInterface/userApiInterface"
import { PostApiInterface } from "../apiInterface/postApiInterface"
import { CommentApiInterface } from "../apiInterface/commentApiInterface"

export const getAppData = (table: string, callBack: (response: UserApiInterface[] | PostApiInterface[] | CommentApiInterface[] | undefined) => void, query?: string) => {
    const serverUrl = "http://localhost:3000"

    let getRequestUrl = serverUrl + "/" + table
    if (query) {
        getRequestUrl += "?q=" + query
    }

    var xhr = new XMLHttpRequest()

    xhr.onreadystatechange = function() { 
        if (xhr.readyState === 4 && xhr.status === 200) {
            try {
                const response: UserApiInterface[] | PostApiInterface[] | CommentApiInterface[] = JSON.parse(xhr.responseText)
                callBack(response)
            } catch {
                callBack(undefined)
            }
        }
    }

    xhr.open("GET", getRequestUrl, true)
    xhr.send(null)
}

export const getPostIdsForQuery = (queryValue: string, callBack: (result: number[]) => void) => {
    getAppData("posts", (response) => {
        const resultsArray: number[] = []
        if (response) {
            response.forEach((postData: UserApiInterface | PostApiInterface | CommentApiInterface) => {
                resultsArray.push(postData.id)
            })
        }

        callBack(resultsArray)
    }, queryValue)
}

export const getCommentIdsForQuery = (queryValue: string, callBack: (result: number[]) => void) => {
    getAppData("comments", (response) => {
        const resultsArray: number[] = []
        if (response) {
            response.forEach((postData: UserApiInterface | PostApiInterface | CommentApiInterface) => {
                resultsArray.push(postData.id)
            })
        }

        callBack(resultsArray)
    }, queryValue)
}
