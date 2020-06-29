import * as React from 'react';
import styled from 'styled-components';

import Check from '../icons/Check';
import Loading from '../icons/Loading';

const ToggleCheck = styled(Check)`
  position: absolute;

  top: 2px;
  left: 4px;
`;

const ToggleLoading = styled(Loading)`
  position: absolute;

  top: 2px;
  left: 4px;
`;

export const ToggleIcon = ({ isOn, loading, theme }) => {
  if (isOn && loading) {
    return <ToggleLoading color={theme.toggleOnIconColor} size="xs" />;
  } else {
    return <ToggleCheck color={theme.toggleOnIconColor} size="xs" />;
  }
};
