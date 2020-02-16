import React from 'react';
import { shallow } from 'enzyme';
import { PostList } from './postList';
import { getMockAppDataWith3Posts } from '../../models/listOfPosts/listOfPosts.test';
import { ListOfPosts } from '../../models/listOfPosts/listOfPosts';

test("renders without crashing", () => {
    const appData = getMockAppDataWith3Posts()
    const listOfPostsModel = new ListOfPosts(appData)
    const handlePostClick = (postId: number) => {}
    
    const postList = shallow(
        <PostList heading="test" listOfPostsModel={listOfPostsModel} postOnClick={handlePostClick} />
    )
    expect(postList.exists()).toBe(true)
})
