import React from 'react';
import { shallow } from 'enzyme';
import { AppLayout } from './appLayout';
import { ViewMode } from '../../App';
import { BackButton } from '../backButton/backButton';

test("renders without crashing", () => {
    const appLayout = shallow(
        <AppLayout viewMode={ViewMode.PostList}>
            <div></div>
        </AppLayout>
    )
    expect(appLayout.exists()).toBe(true)
})

test("renders children correctly", () => {
    const appLayout = shallow(
        <AppLayout viewMode={ViewMode.PostList}>
            <div className="test-child"></div><div className="test-child"></div>
        </AppLayout>
    )
    expect(appLayout.find(".test-child").length).toBe(2)
})

test("doesnt render back button for post list view", () => {
    const handleBackButtonClick = () => {}
    const appLayout = shallow(
        <AppLayout viewMode={ViewMode.PostList} onBackButtonClick={handleBackButtonClick}>
            <div></div>
        </AppLayout>
    )
    expect(appLayout.find(BackButton).exists()).toBe(false)
})

test("renders back button correctly", () => {
    const handleBackButtonClick = () => {}
    const appLayout = shallow(
        <AppLayout viewMode={ViewMode.PostDetails} onBackButtonClick={handleBackButtonClick}>
            <div></div>
        </AppLayout>
    )
    expect(appLayout.find(BackButton).exists()).toBe(true)
})
