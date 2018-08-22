import React from 'react';
import { Box, Item } from 'react-html-email';
// import { CycleDates, RangeDate, PrettyDate } from '../../helpers/dateHelpers';

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
          maxWidth: '540px',
          fontFamily: 'source-sans-pro, sans-serif',
          fontStyle: 'normal',
          color: '#F7F7F7',
          borderRadius: '0px',
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
                  <p style={{ fontSize: '28px', marginTop: '0px', marginBottom: '5px' }}>{header}</p>
                </td>
              </tr>
              {/* <tr>
                <td>
                  <p style={{ fontSize: '14px' }}>{PrettyDate(now)}</p>
                </td>
              </tr> */}
              <tr>
                <td style={{ width: '500px' }}>
                  <p style={{ letterSpacing: '2pt' }}>{message}</p>
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
