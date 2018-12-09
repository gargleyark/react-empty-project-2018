import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../.jest-test-results.json';

import App from './App';

storiesOf('App', module)
  .addDecorator(withTests({ results }))
  .add('Basic App Component', () => <App />, {
    jest: ['App.test.js']
  });
