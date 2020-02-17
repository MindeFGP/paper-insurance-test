import React, { useState } from "react"
import { Input, Button, InputGroup, InputGroupAddon } from "reactstrap"
import "./search.css"

export interface SearchProps {
    onSubmit: (queryValue: string) => void
}

export const Search = React.memo((props: SearchProps) => {
    const initialState = { searchInputValue: "" }
    const [ state, setState ] = useState(initialState)

    const handleSearchInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setState({ searchInputValue: event.target.value })
    }

    const handleSubmit = () => {
        if (state.searchInputValue !== "") {
            props.onSubmit(state.searchInputValue)
            setState({ searchInputValue: "" })
        }
    }

    return (
        <InputGroup>
            <Input className="search-input" type="text" value={state.searchInputValue} onChange={handleSearchInputChange} />
            <InputGroupAddon addonType="append">
                <Button onClick={handleSubmit}>Search</Button>
            </InputGroupAddon>
        </InputGroup>
    )
})
