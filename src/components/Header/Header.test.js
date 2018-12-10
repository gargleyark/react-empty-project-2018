import React from 'react';
import { shallow } from 'enzyme';
import Header from './Header';

describe('Header', () => {
  it('should render with text from prop', () => {
    const text = 'Hello';
    const wrapper = shallow(<Header text={text} />);
    expect(wrapper.text()).toBe(text);
  });
});
