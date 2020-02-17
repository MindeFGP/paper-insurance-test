import React from 'react';
import { shallow } from 'enzyme';
import { BackButton } from './backButton';

test("renders without crashing", () => {
    const handleClick = () => {}
    const backButton = shallow(<BackButton buttonText="test button" onClick={handleClick} />)
    expect(backButton.exists()).toBe(true)
})

test("renders correct text", () => {
    const handleClick = () => {}
    const backButton = shallow(<BackButton buttonText="test button" onClick={handleClick} />)
    expect(backButton.find(".back-button-text").text()).toBe("test button")
})

test("triggers click function on click", () => {
    let hasBeenClicked = false
    const handleClick = () => {
        hasBeenClicked = true
    }
    const backButton = shallow(<BackButton buttonText="test button" onClick={handleClick} />)
    expect(hasBeenClicked).toBe(false)
    backButton.simulate("click")
    expect(hasBeenClicked).toBe(true)
})
