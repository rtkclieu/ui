import * as React from 'react';

import styled, { css } from 'styled-components';
import { useTheme } from '../../hooks';
import { GlobalTheme } from '../..';

export interface BadgeProps {
  /** className of the Badge component */
  className?: string;
  /** Right side content to show in the badge */
  rightChildren?: React.ReactNode;
  /** Optional left side content to show, typically an icon */
  leftChildren?: React.ReactNode;
  /** Color to use for the body of the badge */
  backgroundColor?: string;
  /** Color to use for the text of the badge. Use a color that contrasts with the bockground */
  textColor?: string;
}

interface StyledBadgeProps {
  backgroundColor?: string;
  textColor?: string;
  theme: GlobalTheme;
}

export const StyledBadge = styled.span<StyledBadgeProps>`
  ${({ backgroundColor, textColor, theme }) => css`
    padding: 4px 10px 5px 9px;
    border-radius: 14px;
    white-space: nowrap;
    font-weight: bold;
    border: 0px;
    background: ${backgroundColor || theme.colors.primary};
    color: ${textColor || theme.colors.white};
  `};
`;

const SeparateContents = styled.span`
  margin-right: 7px;
`;

export const Badge: React.FunctionComponent<BadgeProps> = ({
  rightChildren,
  leftChildren,
  className,
  ...rest
}) => {
  const theme = useTheme();

  return (
    <StyledBadge className={className} theme={theme} {...rest}>
      {leftChildren && <SeparateContents>{leftChildren}</SeparateContents>}
      {rightChildren}
    </StyledBadge>
  );
};

Badge.displayName = 'Badge';

Badge.defaultProps = {
  className: '',
  rightChildren: null,
  leftChildren: null,
  backgroundColor: '',
  textColor: '',
};
