import React from 'react';
import { shallow } from 'enzyme';
import { PostList } from './postList';

test("renders without crashing", () => {
    const handlePostClick = (postId: number) => {}
    const postList = shallow(<PostList postOnClick={handlePostClick} />)
    expect(postList.exists()).toBe(true)
})
