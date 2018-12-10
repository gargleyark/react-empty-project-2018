import React from 'react';
import { shallow } from 'enzyme';
import Home from './Home';

import Header from '../../components/Header/Header';

jest.mock('../../components/Header/Header', () => 'header');

describe('Home', () => {
  it('should render header with text "home"', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.html()).toBe('<header text="home"></header>');
  });
});
