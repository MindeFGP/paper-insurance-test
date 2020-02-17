import React from "react"
import { shallow, mount } from "enzyme"
import { Search } from "./search"
import { Button, Input } from "reactstrap"

test("renders without crashing", () => {
    const submitHandler = (queryValue: string) => {}
    const search = shallow(<Search onSubmit={submitHandler} />)
    expect(search.exists()).toBe(true)
})

test("triggers submit handler with correct value on submit", () => {
    let submittedValue = ""
    const submitHandler = (queryValue: string) => {
        submittedValue = queryValue
    }

    const search = mount(<Search onSubmit={submitHandler} />)
    search.find(Input).simulate("change", { target: { value: "search value" } })

    expect(submittedValue).toBe("")
    search.find(Button).simulate("click")
    expect(submittedValue).toBe("search value")
})
