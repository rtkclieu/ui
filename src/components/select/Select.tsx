import * as React from 'react';

import { default as ReactSelect } from 'react-select';
import styled from 'styled-components';

import { useTheme } from '../../hooks/useTheme';
import CaretDown from '../icons/CaretDown';
import Times from '../icons/Times';
import { GlobalTheme } from '../../theme/types';

export interface SelectProps {
  /** className of the Select component */
  className?: string;

  /** see https://react-select.com/props#api for documentation about these props */
  selectProps: any;
}

// defines the list of styles from react-select that are overriden
const getCustomStyles = (theme: GlobalTheme) => ({
  control: (provided, state) => {
    const defaultStyles = {
      ...provided,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.colors.border,
      background: theme.colors.primaryBackground,
      minHeight: '32px',
    };

    if (state.isFocused) {
      return {
        ...defaultStyles,
        borderColor: theme.colors.primary,
        boxShadow: 'none',
      };
    }

    return {
      ...defaultStyles,
    };
  },
  option: (provided, state) => {
    const defaultStyles = {
      fontSize: '14px',
      fontFamily: 'Lato',
      color: theme.colors.black,
    };

    if (state.isSelected) {
      return {
        ...provided,
        ...defaultStyles,
        background: theme.colors.tertiaryBackground,
        color: theme.colors.primary,
        fontWeight: 'bold',
      };
    } else if (state.isFocused) {
      return {
        ...provided,
        ...defaultStyles,
        backgroundColor: theme.colors.quaternaryBackground,
      };
    }
    return {
      ...provided,
      ...defaultStyles,
    };
  },
  menu: provided => {
    return {
      ...provided,
      background: theme.colors.primaryBackground,
    };
  },
  multiValueLabel: provided => {
    return {
      ...provided,
      color: theme.colors.tag,
    };
  },
  multiValue: provided => {
    return {
      ...provided,
      background: theme.colors.quaternaryBackground,
    };
  },
  singleValue: provided => {
    return {
      ...provided,
      color: theme.colors.title,
      fontWeight: 'bold',
    };
  },
});

// some of the styles couldn't be overriden by the styles object
const Container = styled.div`
  font-family: 'Lato';
  font-size: 14px;

  .rtk__input input {
    font-family: inherit;
  }

  .rtk__multi-value__remove:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.colors.quaternaryBackground};
  }

  .rtk__indicator-separator {
    display: none;
  }
`;

const SelectIcon = styled.span`
  padding: 8px;
`;

export const Select: React.FunctionComponent<SelectProps> = ({
  className,
  selectProps,
}) => {
  const theme = useTheme();

  const renderCustomStyles = React.useCallback(() => {
    return getCustomStyles(theme);
  }, [theme]);

  return (
    <Container className={`${className} rtk-select`} theme={theme}>
      <ReactSelect
        classNamePrefix="rtk"
        styles={renderCustomStyles()}
        components={{
          DropdownIndicator: () => (
            <SelectIcon>
              <CaretDown color={theme.colors.body} />
            </SelectIcon>
          ),
          ClearIndicator: props => {
            return (
              <SelectIcon onClick={props.clearValue}>
                <Times color={theme.colors.body} />
              </SelectIcon>
            );
          },
          MultiValueRemove: props => {
            return (
              <span {...props.innerProps}>
                <Times color={theme.colors.tag} />
              </span>
            );
          },
        }}
        {...selectProps}
      />
    </Container>
  );
};

Select.displayName = 'Select';
