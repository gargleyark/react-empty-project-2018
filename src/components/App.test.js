import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render with text "Hello"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.text()).toBe('Hello');
  });
});
