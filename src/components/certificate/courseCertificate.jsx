import React from 'react';
import { Box, Item } from 'react-html-email';
import deliveryHelper from '../../helpers/deliveryHelper';
import { CycleDates, RangeDate, PrettyDate } from '../../helpers/dateHelpers';
import Button from '../button';

class CourseCertificate extends React.Component {
  render() {
    const {
      name = '',
      first = '',
      body = '',
      profile_uid,
      course_id,
      pdf,
      date = '',
      message = '',
      certMessage = 'Congratulations ' +
        `${first}` +
        '! ' +
        "You've been issued a new certificate of completion. Please take a few moments to complete an evaluation to help us improve by clicking the Complete Evaluation button below.",
      button1Text = 'View Certificate',
      button2Text = 'Complete Evaluation',
      button1Link = `${pdf}`,
      button2Link = 'https://app.prolaera.com/#/users/' + `${profile_uid}` + '/courses/' + `${course_id}` + '/review'
    } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '20px',
          textAlign: 'center',
          borderRadius: '5px',
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'source-sans-pro, sans-serif',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <div
              style={{
                maxWidth: '100%',
                marginLeft: 'auto',
                marginRight: 'auto',
                border: '1px solid lightgray',
                borderRadius: '5px',
                background: '#2F4050',
                color: '#FFFFFF',
                fontFamily: 'source-sans-pro, sans-serif',
                fontStyle: 'normal',
                fontWeight: 'lighter'
              }}
            >
              <p style={{ marginBottom: '5px', fontSize: '30px', letterSpacing: '3px' }}>{name}</p>
              <p style={{ padding: '5px', fontSize: '18px' }}>{PrettyDate(date)}</p>
            </div>
          </Item>
          <Item>
            <table id="subHeaderTable" style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto' }}>
              <tr>
                <td>
                  <p>{message}</p>
                  <div>{profile_uid ? <p>{certMessage}</p> : <div />}</div>
                </td>
              </tr>
            </table>
          </Item>
          <Item>
            <p>{body}</p>
          </Item>
          <Item align="center">
            <table
              style={{
                textAlign: 'center',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <tr>
                <td>
                  <Button text={button1Text} link={button1Link} />
                </td>
                <td>
                  <Button text={button2Text} link={button2Link} />
                </td>
              </tr>
            </table>
            {/* <hr style={{ width: '45px' }} /> */}
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseCertificate;
