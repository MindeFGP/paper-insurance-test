import React from 'react'
import { shallow } from 'enzyme'
import { SearchResults } from './searchResults'
import { AppDataInterface } from '../../utils/useAppData'
import { getPostIdsForQuery } from '../../utils/getAppData'

jest.mock("../../utils/getAppData", () => ({
  getPostIdsForQuery: jest.fn().mockImplementation(() => {
    return [] as number[]
  })
}))

const getPostIdsForQueryMock = getPostIdsForQuery as jest.Mock

test("renders without crashing", () => {
  const postOnClick = (postId: number) => {}
  const appData: AppDataInterface = {
    areUsersLoaded: true,
    arePostsLoaded: true,
    areCommentsLoaded: true,
    users: [],
    posts: [],
    comments: []
  }
  const searchResults = shallow(<SearchResults appData={appData} queryValue="test" postOnClick={postOnClick} />)
  expect(searchResults.exists()).toBe(true)
})
