import React from 'react';
import { shallow } from 'enzyme';
import { PostList } from './postList';
import { getMockAppDataWith3Posts } from '../../models/listOfPosts/listOfPosts.test';
import { ListOfPosts } from '../../models/listOfPosts/listOfPosts';
import { Post } from '../post/post';
import { ViewMode } from '../../App';

test("renders without crashing", () => {
    const appData = getMockAppDataWith3Posts()
    const listOfPostsModel = new ListOfPosts(appData)
    const handlePostClick = (postId: number) => {}
    
    const postList = shallow(
        <PostList heading="test" viewMode={ViewMode.PostList} listOfPostsModel={listOfPostsModel} postOnClick={handlePostClick} />
    )
    expect(postList.exists()).toBe(true)
})

test("renders correct heading", () => {
    const appData = getMockAppDataWith3Posts()
    const listOfPostsModel = new ListOfPosts(appData)
    const handlePostClick = (postId: number) => {}
    
    const postList = shallow(
        <PostList heading="test heading" viewMode={ViewMode.PostList} listOfPostsModel={listOfPostsModel} postOnClick={handlePostClick} />
    )
    expect(postList.find("h2").first().text()).toBe("test heading")
})

test("renders all posts from model", () => {
    const appData = getMockAppDataWith3Posts()
    const listOfPostsModel = new ListOfPosts(appData)
    const handlePostClick = (postId: number) => {}
    
    const postList = shallow(
        <PostList heading="test heading" viewMode={ViewMode.PostList} listOfPostsModel={listOfPostsModel} postOnClick={handlePostClick} />
    )
    expect(postList.find(Post).length).toBe(3)
})
