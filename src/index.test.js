import renderer from 'react-test-renderer';
import eventInvite from './templates/tests/json/eventInvite.json';
import engine from '.';
const logoUrl = 'https://assets.prolaera.com/prolaeraLogo_fullText.png';
describe('index.js', () => {
  it('checks snapshot', async () => {
    const emailHtml = await engine({
      body: {
        template: 'eventInvitation',
        event: eventInvite,
        imageUrl: logoUrl
      }
    });
    const emailComponent = renderer.create(emailHtml);
    const registrationJson = emailComponent.toJSON();
    expect(registrationJson).toMatchSnapshot();
  });
});
