import * as React from 'react';

import styled, { css } from 'styled-components';

import { motion } from 'framer-motion';

import { useTheme } from '../../hooks/useTheme';

import { ToggleIcon } from './ToggleIcon';

export interface ToggleProps {
  /** className of the Toggle component */
  className?: string;

  /** If true, the toggle will default to on */
  defaultOn?: boolean;

  /** If true, the toggle will not be interactible */
  disabled?: boolean;

  /** If true, the toggle will not be interactible and in a loading state */
  loading?: boolean;

  /** Function that is called when toggle is clicked */
  onClick?: (isOn: boolean) => void;
}

interface ContainerProps {
  isOn: boolean;
  disabled?: boolean;
}

const Container = styled.div<ContainerProps>`
  position: relative;
  height: ${({ theme }) => theme.toggleHeight};
  width: ${({ theme }) => theme.toggleWidth};

  background: ${({ theme, isOn }) =>
    isOn ? theme.toggleOnBackground : theme.toggleOffBackground};
  border-radius: ${({ theme }) => theme.toggleBorderRadius};
  cursor: pointer;

  ${({ disabled, theme }) =>
    disabled &&
    css`
      pointer-events: none;
      background: ${theme.toggleDisabledBackground};
    `}
`;

const ToggleCircleContainer = styled(motion.div)`
  position: absolute;
  top: ${({ theme }) => theme.toggleCircleTop};
`;

const ToggleCircle = styled.div`
  background: ${({ theme }) => theme.toggleCircleBackground};

  height: ${({ theme }) => theme.toggleCircleHeight};
  width: ${({ theme }) => theme.toggleCircleWidth};

  border-radius: 50%;
`;

export const Toggle: React.FunctionComponent<ToggleProps> = ({
  className,
  defaultOn,
  disabled,
  loading,
  onClick,
}) => {
  const [isOn, toggleOn] = React.useState<boolean>(defaultOn || false);

  const theme = useTheme();

  const handleClick = React.useCallback(() => {
    toggleOn(!isOn);

    if (onClick) {
      onClick(!isOn);
    }
  }, [isOn, toggleOn, onClick]);

  return (
    <Container
      className={`${className} rtk-toggle`}
      theme={theme}
      onClick={handleClick}
      isOn={isOn}
      disabled={disabled}
    >
      <ToggleCircleContainer
        theme={theme}
        initial={'off'}
        variants={{
          on: {
            x: 18,
          },
          off: {
            x: 2,
          },
        }}
        animate={isOn ? 'on' : 'off'}
        transition={{ duration: theme.animationTimeVeryFast, type: 'tween' }}
      >
        <ToggleCircle theme={theme} />
      </ToggleCircleContainer>
      {isOn && <ToggleIcon theme={theme} loading={loading} isOn={isOn} />}
    </Container>
  );
};

Toggle.displayName = 'Toggle';
