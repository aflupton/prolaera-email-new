import React from 'react';
import { A, Box, Image, Item } from 'react-html-email';

const FooterText = {
  fontFamily: 'Helvetica',
  color: '#ffffff',
  fontSize: '12pt'
};

export default () => (
  <Box align="center" width="100%" cellSpacing={20} style={{ backgroundColor: '#333333' }}>
    {/* <Item align="center" style={{ fontSize: '19px', ...FooterText }}>
      Something not right?{' '}
    </Item>
    <Item align="center" style={{ fontSize: '12px', ...FooterText }}>
      You can contact us at{' '}
      <A href="https://www.prolaera.com/contact/" style={{ fontSize: '12px', ...FooterText }} target="_blank">
        Prolaera.com
      </A>
      {'\n'}
      or email us directly at{' '}
      <A href="mailto:Support@Prolaera.com" style={{ fontSize: '12px', ...FooterText }}>
        Support@Prolaera.com.
      </A>
    </Item>
    <Item align="center" style={{ fontSize: '12px', ...FooterText }}>
      Powered By
    </Item>
    <Item align="center">
      <Image
        src="https://gallery.mailchimp.com/eb930e30a15249a18d658c183/images/196fa069-3113-464c-a304-a1aa9f99fe22.png"
        alt="react"
        height={23}
        width={100}
      />
    </Item>
    <Item align="center" style={{ fontSize: '12px', ...FooterText }}>
      © Prolaera 2017
    </Item> */}
    <Item>
      <table style={{ marginLeft: '36%' }}>
        <tr>
          <td style={{ ...FooterText }}>Powered By</td>
          <td style={{ marginRight: '1px', ...FooterText }}>
            <Image
              src="https://gallery.mailchimp.com/eb930e30a15249a18d658c183/images/196fa069-3113-464c-a304-a1aa9f99fe22.png"
              alt="react"
              height={23}
              width={100}
              marginRight={'1em'}
            />
          </td>
          <td style={{ ...FooterText }}>© Prolaera 2017</td>
        </tr>
      </table>
    </Item>
  </Box>
);
