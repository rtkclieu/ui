/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Select } from '../Select';

// @ts-ignore
import mdx from './Select.mdx';

export default {
  title: 'Components/Select',
  component: Select,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

export const simple = () => (
  <Select
    selectProps={{
      options,
    }}
  >
    children
  </Select>
);
