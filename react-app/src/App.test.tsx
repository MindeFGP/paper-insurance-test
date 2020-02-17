import React from 'react';
import App from './App';
import { shallow } from 'enzyme';
import { useAppData, AppDataInterface } from './utils/useAppData';
import { AppLayout } from './components/appLayout/appLayout';

jest.mock("./utils/useAppData", () => ({
  useAppData: jest.fn().mockImplementation(() => {
    return {
      areUsersLoaded: true,
      arePostsLoaded: true,
      areCommentsLoaded: true,
      users: [],
      posts: [],
      comments: []
    } as AppDataInterface
  })
}))

const useAppDataMock = useAppData as jest.Mock

test("renders without crashing", () => {
  const app = shallow(<App />)
  expect(app.exists()).toBe(true)
});

test("doesnt render anything when data fails to load", () => {
  useAppDataMock.mockImplementationOnce(() => {
    return {
      areUsersLoaded: false,
      arePostsLoaded: false,
      areCommentsLoaded: false,
      users: [],
      posts: [],
      comments: []
    } as AppDataInterface
  })

  const app = shallow(<App />)
  expect(app.children().length).toBe(0)
});

test("renders appLayout when data loads", () => {
  const app = shallow(<App />)
  expect(app.find(AppLayout).exists()).toBe(true)
})
