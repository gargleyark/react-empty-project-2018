import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import results from '../../../.jest-test-results.json';

import Header from './Header';

storiesOf('Header', module)
  .addDecorator(withTests({ results }))
  .add('with text', () => <Header text="hello" />, {
    jest: ['Header.test.js']
  });
