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

export const simple = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      selectProps={{
        options,
        menuPortalTarget: document.body,
      }}
    >
      children
    </Select>
  );
};

export const multi = () => {
  const options = [
    { value: 'chocolate', label: 'Chocolate' },
    { value: 'strawberry', label: 'Strawberry' },
    { value: 'vanilla', label: 'Vanilla' },
  ];

  return (
    <Select
      selectProps={{
        options,
        isMulti: true,
        menuPortalTarget: document.body,
      }}
    >
      children
    </Select>
  );
};
