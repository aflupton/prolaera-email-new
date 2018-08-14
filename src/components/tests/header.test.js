import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { renderEmail } from 'react-html-email';
import renderer from 'react-test-renderer';
import buildHeader, { Header } from '../header';
import writeFile from '../../helpers/writeFileHelper';

Enzyme.configure({ adapter: new Adapter() });

describe('buildHeader image resizing tests', async () => {
  it('resizes image successfully NHHco Logo', async () => {
    const Header = await buildHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });

  it('resizes image successfully KRS logo', async () => {
    const Header = await buildHeader('http://assets.prolaera.com/KRS-lg.png');
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });

  it('resizes image successfully a-lign logo', async () => {
    const Header = await buildHeader(
      'https://prolaera.s3-us-west-2.amazonaws.com/sponsors/def4c2bf-0485-4eda-9b2b-0e4055ef0dbe.logo.png'
    );
    const headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });

  it.skip('it writes an html file to test.html', async () => {
    const Header = await buildHeader('http://assets.prolaera.com/NHHCo-lg.png');
    const headerHtml = renderEmail(<Header text={'View My Compliance'} link={'https://www.google.com/'} />);
    const saved = await writeFile(headerHtml);
    expect(saved).toEqual(true);
  });
});

describe('Header component tests', async () => {
  it('creates and checks snapshot of Header html', async () => {
    let headerComponent = renderer.create(<Header />);
    let headerJson = headerComponent.toJSON();
    expect(headerJson).toMatchSnapshot();
  });

  it('checks default Header html', async () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.contains(<a href="https://app.prolaera.com">prolaera.com</a>)).toBe(true);
  });

  it('checks custom link text in Header html', async () => {
    const wrapper = shallow(<Header text={'View My Compliance'} />);
    expect(wrapper.contains(<a href="https://app.prolaera.com">View My Compliance</a>)).toBe(true);
  });

  it('checks custom link url in Header html', async () => {
    const wrapper = shallow(<Header text={'View My Compliance'} link={'https://www.google.com/'} />);
    expect(wrapper.contains(<a href="https://www.google.com/">View My Compliance</a>)).toBe(true);
  });
});
