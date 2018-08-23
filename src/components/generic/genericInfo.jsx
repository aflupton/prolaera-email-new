import React from 'react';
import { Box, Item } from 'react-html-email';

class GenericInfo extends React.Component {
  render() {
    const { header = '', body = '', footer = '' } = this.props;

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'left',
          padding: '20px',
          fontFamily: 'source-sans-pro, sans-serif',
          marginBottom: '0px',
          backgroundColor: 'white'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <div>{header}</div>
          </Item>
          <Item>
            <div>{body}</div>
          </Item>
          <Item>
            <div>{footer}</div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default GenericInfo;
