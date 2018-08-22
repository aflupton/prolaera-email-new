import React from 'react';
import { Box, Image, Item, Span } from 'react-html-email';

const FooterText = {
  fontFamily: 'source-sans-pro, sans-serif',
  color: '#F7F7F7',
  fontSize: '10pt',
  fontWeight: '100',
  letterSpacing: '1pt'
};
var now = new Date();
export default () => (
  <Box
    id="subHeaderWrapper"
    className="emailFooter"
    align="center"
    width="540px"
    cellSpacing={20}
    style={{ backgroundColor: '#333333' }}
  >
    <Item>
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

      <div style={{ float: 'left' }}>
        <Span style={{ ...FooterText, float: 'left', padding: '10px 5px 10px 10px' }}>Powered By</Span>
        <Image
          src="https://gallery.mailchimp.com/eb930e30a15249a18d658c183/images/196fa069-3113-464c-a304-a1aa9f99fe22.png"
          alt="react"
          height={23}
          width={100}
          style={{ paddingTop: '5px' }}
        />
      </div>
      <div style={{ ...FooterText, textAlign: 'right', padding: '10px 10px 10px 10px' }}>
        © Prolaera {now.getFullYear()}
      </div>
    </Item>
  </Box>
);
