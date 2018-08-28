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
          <Item align="center" style={{ paddingBottom: '20px' }}>
            <div
              style={{
                width: '100%',
                height: '20px',
                borderBottom: '1px solid grey',
                textAlign: 'center',
                boxSizing: 'border-box',
                position: 'relative',
                margin: 'auto',
                padding: '10px'
              }}
            >
              <span
                style={{
                  fontSize: '16pt',
                  backgroundColor: '#FFFFFF',
                  padding: '0px 20px',
                  fontWeight: 'lighter',
                  boxSizing: 'border-box',
                  margin: '0'
                }}
              >
                {header}
              </span>
            </div>
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
