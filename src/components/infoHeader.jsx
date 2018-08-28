import React from 'react';
import { Box, Item } from 'react-html-email';

class InfoHeader extends React.Component {
  render() {
    const { info = '' } = this.props;

    return (
      <div>
        <Box className="courseReview" align="center" width="100%">
          <Item align="center" style={{ padding: '20px' }}>
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
                {info} Information
              </span>
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default InfoHeader;
