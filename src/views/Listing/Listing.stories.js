import React from 'react';
import { storiesOf } from '@storybook/react';
import { withTests } from '@storybook/addon-jest';
import { BrowserRouter } from 'react-router-dom';

import results from '../../../.jest-test-results.json';

import Listing from './Listing';

storiesOf('Listing', module)
  .addDecorator(withTests({ results }))
  .add(
    'Basic Listing View',
    () => (
      <BrowserRouter>
        <Listing />
      </BrowserRouter>
    ),
    {
      jest: ['Listing.test.js']
    }
  );
