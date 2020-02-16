import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

jest.mock("./utils/useAppData", () => ({
  useAppData: jest.fn().mockImplementation(() => {
    return {
      areUsersLoaded: false,
      arePostsLoaded: false,
      areCommentsLoaded: false,
      users: [],
      posts: [],
      comments: []
    }
  })
}))

test("renders without crashing", () => {
  const app = shallow(<App />)
  expect(app.exists()).toBe(true)
});

test("doesnt render anything when data fails to load", () => {
  const app = shallow(<App />)
  expect(app.children().length).toBe(0)
});
