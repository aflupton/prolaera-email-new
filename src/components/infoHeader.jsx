import React from 'react';
import { Box, Item } from 'react-html-email';

class InfoHeader extends React.Component {
  render() {
    const { name = '' } = this.props;

    return (
      <div>
        <Box>
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
                  fontSize: '14pt',
                  backgroundColor: '#FFFFFF',
                  padding: '0px 20px',
                  boxSizing: 'border-box',
                  margin: '0'
                }}
              >
                {name} Information
              </span>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default InfoHeader;
