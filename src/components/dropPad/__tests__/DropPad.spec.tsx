import * as React from 'react';

import { shallow } from 'enzyme';

import { DropPad } from '../DropPad';

describe('DropPad', () => {
  it('renders', () => {
    const wrapper = shallow(<DropPad files={[]} />);

    expect(wrapper.exists('DropPad__Container')).toBe(true);
  });
});
