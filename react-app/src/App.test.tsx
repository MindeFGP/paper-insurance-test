import React from 'react';
import App from './App';
import { shallow } from 'enzyme';

test("renders without crashing", () => {
  const app = shallow(<App />)
  expect(app.exists()).toBe(true)
});
