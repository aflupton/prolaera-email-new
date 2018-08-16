import React from 'react';
import { Box, Item } from 'react-html-email';
// import deliveryHelper from '../../helpers/deliveryHelper';
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
          height: 'auto',
          marginBottom: '20px',
          borderRadius: '2px',
          textAlign: 'center',
          maxWidth: '540px',
          paddingBottom: '25px',
          fontFamily: 'source-sans-pro, sans-serif',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <div
              style={{
                maxWidth: '540px',
                padding: '15px',
                backgroundColor: '#2F4050',
                borderRadius: '2px 2px 0px 0px',
                fontFamily: 'source-sans-pro, sans-serif',
                fontStyle: 'normal',
                fontWeight: '100'
              }}
            >
              <p style={{ marginBottom: '5px', fontSize: '28px', color: 'lightgray', letterSpacing: '5px' }}>{name}</p>
              <p style={{ padding: '5px', fontSize: '18px', color: 'lightgray', letterSpacing: '3px' }}>
                {PrettyDate(date)}
              </p>
            </div>
          </Item>
          <Item>
            <table
              id="subHeaderTable"
              style={{ textAlign: 'center', marginLeft: 'auto', marginRight: 'auto', padding: '20px' }}
            >
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
                <td
                  style={{
                    backgroundColor: '#72C02C',
                    borderRadius: '2px',
                    width: '200px',
                    height: '50px',
                    margin: 'auto'
                  }}
                >
                  <Button text={button1Text} link={button1Link} />
                </td>
                <td
                  style={{
                    backgroundColor: '#2F4050',
                    borderRadius: '2px',
                    width: '200px',
                    height: '50px',
                    margin: 'auto'
                  }}
                >
                  <Button text={button2Text} link={button2Link} />
                </td>
              </tr>
            </table>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseCertificate;
