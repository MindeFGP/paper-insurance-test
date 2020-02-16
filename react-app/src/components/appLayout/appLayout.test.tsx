import React from 'react';
import { shallow } from 'enzyme';
import { AppLayout } from './appLayout';

test("renders without crashing", () => {
    const appLayout = shallow(<AppLayout><div></div></AppLayout>)
    expect(appLayout.exists()).toBe(true)
})

test("renders children correctly", () => {
    const appLayout = shallow(
        <AppLayout><div className="test-child"></div><div className="test-child"></div></AppLayout>
    )
    expect(appLayout.find(".test-child").length).toBe(2)
})
