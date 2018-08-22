import React from 'react';
import { Box, Item } from 'react-html-email';

class SubHeader extends React.Component {
  render() {
    const {
      profile_uid,
      subText = '',
      header = '',
      first,
      message = '',
      certMessage = 'Congratulations ' +
        `${first}` +
        '! ' +
        "You've been issued a new certificate of completion. Please take a few moments to complete an evaluation to help us improve by clicking the Complete Evaluation button below."
    } = this.props;
    var now = new Date();

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: '0px',
          marginBottom: '0px',
          maxWidth: '500px',
          fontFamily: 'source-sans-pro, sans-serif',
          fontStyle: 'normal',
          color: '#F7F7F7',
          backgroundColor: '#2F4050',
          fontWeight: '100',
          letterSpacing: '3pt'
        }}
      >
        <Box className="subHeader" align="center" width="100%">
          <Item>
            <table id="subHeaderTable" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
              <tr>
                <td>
                  <p style={{ fontSize: '18pt', marginBottom: '5px' }}>{subText}</p>
                </td>
              </tr>
              <tr>
                <td>
                  <p style={{ fontSize: '28px', marginTop: '0px', marginBottom: '0px' }}>{header}</p>
                </td>
              </tr>
              <tr style={{ margin: 'auto', padding: '0px 10px 10px 10px' }}>
                <td style={{ width: '100%' }}>
                  <div style={{ letterSpacing: '2pt', padding: '20px 20px 0px 20px' }}>{message}</div>
                  <div>{profile_uid ? <p>{certMessage}</p> : <div />}</div>
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default SubHeader;
