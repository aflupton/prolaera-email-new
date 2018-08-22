import React from 'react';
import { Box, Item } from 'react-html-email';

class SubFooter extends React.Component {
  render() {
    const { text, subtext = '' } = this.props;

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '0px',
          fontFamily: 'source-sans-pro, sans-serif',
          padding: '20px',
          maxWidth: '500px',
          backgroundColor: 'white'
        }}
      >
        <Box className="subFooter" align="center" width="100%">
          <Item align="justify" style={{ paddingLeft: '30px', paddingRight: '30px' }}>
            <p>{text}</p>
            <p>{subtext}</p>
          </Item>
        </Box>
      </div>
    );
  }
}

export default SubFooter;
