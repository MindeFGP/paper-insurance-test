import { UserApiInterface } from "../../apiInterface/userApiInterface"

export interface UserModelInterface {
    id: number
    name: string
    username: string
    email: string
    photoUrl: string
}

export class User implements UserModelInterface {
    id: number
    name: string
    username: string
    email: string
    photoUrl: string

    constructor(userData: UserApiInterface) {
        this.id = userData.id
        this.name = userData.name
        this.username = userData.username
        this.email = userData.email
        this.photoUrl = userData.photo
    }
}
