import * as React from 'react';

import { default as ReactSelect, Props } from 'react-select';
import styled from 'styled-components';

import { useTheme } from '../../hooks/useTheme';
import CaretDown from '../icons/CaretDown';
import Times from '../icons/Times';
import { GlobalTheme } from '../../theme/types';

export interface SelectProps {
  /** className of the Select component */
  className?: string;

  /** see https://react-select.com/props#api for documentation about these props */
  selectProps: Props;
}

// defines the list of styles from react-select that are overriden
const getCustomStyles = (theme: GlobalTheme) => ({
  control: (provided, state) => {
    const defaultStyles = {
      ...provided,
      borderWidth: '1px',
      borderStyle: 'solid',
      borderColor: theme.selectControlBorderColor,
      background: theme.selectControlBackground,
      minHeight: theme.selectControlMinHeight,
    };

    if (state.isFocused) {
      return {
        ...defaultStyles,
        borderColor: theme.selectControlHoverBorderColor,
        boxShadow: 'none',
      };
    }

    if (state.isDisabled) {
      return {
        ...defaultStyles,
        background: theme.selectControlDisabledBackground,
        opacity: 0.8,
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
      color: theme.selectOptionColor,
    };

    if (state.isSelected) {
      return {
        ...provided,
        ...defaultStyles,
        background: theme.selectOptionSelectedBackground,
        color: theme.selectOptionSelectedColor,
        fontWeight: 'bold',
      };
    } else if (state.isFocused) {
      return {
        ...provided,
        ...defaultStyles,
        backgroundColor: theme.selectOptionFocusedBackground,
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
      background: theme.selectMenuBackground,
    };
  },
  multiValueLabel: provided => {
    return {
      ...provided,
      color: theme.selectMultiValueLabelColor,
    };
  },
  multiValue: provided => {
    return {
      ...provided,
      background: theme.selectMultiValueBackground,
    };
  },
  singleValue: provided => {
    return {
      ...provided,
      color: theme.selectSingleValueColor,
      fontWeight: 'bold',
    };
  },
});

// some of the styles couldn't be overriden by the styles object
const Container = styled.div`
  font-family: 'Lato';
  font-size: 14px;

  .rtk__control:hover {
    border-color: ${({ theme }) => theme.selectControlHoverBorderColor};
  }

  .rtk__input input {
    font-family: inherit;
  }

  .rtk__multi-value__remove:hover {
    cursor: pointer;
    background: ${({ theme }) => theme.selectMultiValueRemoveHoverBackground};
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
  const {
    classNamePrefix, // eslint-disable-line @typescript-eslint/no-unused-vars,
    components,
    ...restOfSelectProps
  } = selectProps;

  const theme = useTheme();

  const styles = React.useMemo(() => getCustomStyles(theme), [theme]);

  return (
    <Container className={`${className} rtk-select`} theme={theme}>
      <ReactSelect
        classNamePrefix="rtk"
        styles={styles}
        components={{
          ...components,
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
        {...restOfSelectProps}
      />
    </Container>
  );
};

Select.displayName = 'Select';
