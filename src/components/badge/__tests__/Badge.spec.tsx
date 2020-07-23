import * as React from 'react';

import { shallow } from 'enzyme';

import { Badge } from '../Badge';
import { Icon } from '../../icons';

describe('Badge', () => {
  it('renders', () => {
    const wrapper = shallow(<Badge>Test</Badge>);
    expect(wrapper.find('Badge__StyledBadge')).toExist();
    expect(wrapper.find('Badge__StyledBadge').text()).toBe('Test');
  });

  it('can show an icon', () => {
    const exampleIcon = <Icon.Check />;
    const wrapper = shallow(<Badge leftChildren={exampleIcon} />);
    expect(wrapper.find('Check')).toExist();
  });

  it('can set the backgroundColor prop ', () => {
    const wrapper = shallow(<Badge backgroundColor="green" />); // hello

    // @ts-ignore
    expect(wrapper.find('Badge__StyledBadge').prop('backgroundColor')).toBe(
      'green'
    );
  });
});
