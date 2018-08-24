import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import Button from '../button';
import TeamInfo from '../team/teamInfo';

Enzyme.configure({
  adapter: new Adapter()
});

const team = {
  name: 'Test Team Name',
  description: 'Test Team Description',
  buttonText: 'Test Button Text',
  buttonLink: 'testButtonLink'
};

describe.skip('TeamInfo component', () => {
  it('checks custom inputs', async () => {
    const wrapper = shallow(<TeamInfo {...team} />);
    expect(
      wrapper.contains(
        <h4 style={{ marginTop: '0px' }}>
          Name: <span style={{ fontWeight: 'normal' }}>Test Team Name</span>
        </h4>
      )
    ).toBe(true);
    expect(wrapper.contains(<p style={{ marginTop: '10px' }}>Test Team Description</p>)).toBe(true);
    expect(
      wrapper.contains(
        <Button text="Test Button Text" link="https://app.prolaera.com/#/admin/testButtonLink/dashboard" />
      )
    ).toBe(true);
  });
});

describe.skip('TeamInfo button', () => {
  it('checks conditional rendering', async () => {
    const wrapper = shallow(<TeamInfo />);
    expect(wrapper.contains(<span className="buttonSpan" />)).toBe(true);
  });
});
