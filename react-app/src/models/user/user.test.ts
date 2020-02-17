import { UserApiInterface } from "../../apiInterface/userApiInterface"
import { User } from "./user"

test("constructs model correctly from api data", () => {
    const userApiData: UserApiInterface = {
        id: 1,
        name: "test name",
        username: "test username",
        email: "test@email.com",
        photo: "https://test.photo.url"
    }
    const userModel = new User(userApiData)
    expect(userModel.id).toBe(1)
    expect(userModel.name).toBe("test name")
    expect(userModel.username).toBe("test username")
    expect(userModel.email).toBe("test@email.com")
    expect(userModel.photoUrl).toBe("https://test.photo.url")
})
