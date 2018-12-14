import React from 'react';
import { shallow } from 'enzyme';
import { Link } from 'react-router-dom';
import Home from './Home';

import Header from '../../components/Header/Header';

jest.mock('../../components/Header/Header', () => 'header');
jest.mock('react-router-dom', () => ({ Link: 'a' }));

describe('Home', () => {
  it('should contain a header and a products link', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper.find('header').exists()).toBe(true);
    expect(wrapper.find('a').text()).toBe('View products');
  });
});
