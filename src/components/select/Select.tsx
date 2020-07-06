import * as React from 'react';

import { default as ReactSelect } from 'react-select';

import CaretDown from '../icons/CaretDown';

import styled from 'styled-components';

export interface SelectProps {
  /** className of the Select component */
  className?: string;

  /** see https://react-select.com/props#api for documentation about these props */
  selectProps: any;
}

const Container = styled.div`
  font-family: 'Lato';

  .rtk__control {
    border-width: 1px;
    border-style: solid;
    border-color: grey;

    background: white;

    min-height: 32px;
  }

  .rtk__control:hover {
    border-color: blue;
  }

  .rtk__control--is-focused {
    border-color: green;
    box-shadow: none;
  }

  .rtk__input input {
    font-family: inherit;
  }

  .rtk__indicators {
    padding: 8px;
  }

  .rtk__indicator-separator {
    display: none;
  }
`;

export const Select: React.FunctionComponent<SelectProps> = ({
  className,
  selectProps,
}) => {
  return (
    <Container className={`${className} rtk-select`}>
      <ReactSelect
        classNamePrefix="rtk"
        components={{
          DropdownIndicator: () => <CaretDown />,
        }}
        {...selectProps}
      />
    </Container>
  );
};

Select.displayName = 'Select';
