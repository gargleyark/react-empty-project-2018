import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

import Home from '../views/Home/Home';

jest.mock('../views/Home/Home', () => 'home');

describe('App', () => {
  it('should render with <home /> element', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.html()).toBe('<home></home>');
  });
});
