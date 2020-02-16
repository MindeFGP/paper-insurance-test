import { UserApiInterface } from "../apiInterface/userApiInterface"
import { PostApiInterface } from "../apiInterface/postApiInterface"
import { CommentApiInterface } from "../apiInterface/commentApiInterface"

export const getAppData = (table: string, callBack: (response: UserApiInterface[] | PostApiInterface[] | CommentApiInterface[] | undefined) => void) => {
    const serverUrl = "http://localhost:3000"

    const getRequestUrl = serverUrl + "/" + table

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
