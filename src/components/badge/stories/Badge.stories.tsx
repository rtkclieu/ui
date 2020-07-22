/* eslint-disable */

import * as React from 'react';

import { Badge } from '../Badge';

// @ts-ignore
import mdx from './Badge.mdx';
import { Icon } from '../../icons';
import { useTheme } from '../../../hooks';

export default {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    docs: {
      page: mdx,
    },
  },
};

export const simple = () => {
  const theme = useTheme();
  const exampleIcon = <Icon.Check color={theme.colors.white} />;
  return <Badge rightChildren="v10.42" leftChildren={exampleIcon} />;
};

export const image = () => {
  const left = <Icon.Exclamation />;
  const right = <Icon.InfoCircle />;
  return (
    <Badge
      rightChildren={right}
      leftChildren={left}
      backgroundColor="#518042"
      textColor="#FFFFFF"
    />
  );
};

export const text = () => {
  const right = 'Text Only';
  return (
    <Badge
      rightChildren={right}
      backgroundColor="#518042"
      textColor="#FFFFFF"
    />
  );
};
