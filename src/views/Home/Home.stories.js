import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';

import Home from './Home';

storiesOf('Home', module)
  .addDecorator(withTests({ results }))
  .add('Basic Home View', () => <Home />, {
    jest: ['Home.test.js']
  });
