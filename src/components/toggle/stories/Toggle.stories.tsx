/* eslint-disable */

import * as React from 'react';
import styled from 'styled-components';

import { Toggle } from '../Toggle';

// @ts-ignore
import mdx from './Toggle.mdx';

export default {
  title: 'Components/Toggle',
  component: Toggle,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => <Toggle />;

export const loading = () => {
  const [isLoading, setLoading] = React.useState(false);

  const handleClick = React.useCallback(isOn => {
    if (isOn) {
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
      }, 2000);
    }
  }, []);

  return <Toggle onClick={handleClick} loading={isLoading} />;
};

export const disabled = () => <Toggle disabled />;
