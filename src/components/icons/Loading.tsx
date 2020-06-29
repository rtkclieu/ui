import * as React from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faCircleNotch } from '@fortawesome/free-solid-svg-icons/faCircleNotch';

import { useTheme } from '../../hooks';
import { IconProps } from './types';

const Loading: React.FunctionComponent<IconProps> = ({
  className,
  color,
  ...props
}) => {
  const theme = useTheme();

  return (
    <FontAwesomeIcon
      className={className}
      icon={faCircleNotch}
      color={color || theme.colors.primary}
      spin
      {...props}
    />
  );
};

export default Loading;
