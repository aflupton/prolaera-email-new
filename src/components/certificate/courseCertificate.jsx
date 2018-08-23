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
    var now = new Date();

    return (
      <div
        id="courseCertificate"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          height: 'auto',
          marginBottom: '0px',
          textAlign: 'center',
          fontFamily: 'source-sans-pro, sans-serif',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box className="courseCertificate" align="center" width="100%">
          <Item style={{ backgroundColor: '#2F4050', maxWidth: '100%' }}>
            <a
              href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
              style={{ textDecoration: 'none', color: 'inherit', height: '100%' }}
            >
              <div
                style={{
                  padding: '10px 15px 20px',
                  backgroundColor: '#2F4050',
                  fontFamily: 'source-sans-pro, sans-serif',
                  fontStyle: 'normal',
                  color: '#F7F7F7',
                  fontWeight: '100'
                }}
              >
                <p style={{ fontSize: '28px', letterSpacing: '3px' }}>{name}</p>
                <p style={{ fontSize: '18px', letterSpacing: '3px' }}>{PrettyDate(now)}</p>
              </div>
            </a>
          </Item>
          <Item>
            <table
              style={{
                textAlign: 'center',
                fontSize: '14pt',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <tr>
                <td>
                  <p>{message}</p>
                  <div style={{ padding: '10px 5% 5% 0px' }}>{profile_uid ? <p>{certMessage}</p> : <div />}</div>
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
                marginRight: 'auto',
                borderSpacing: '10px'
              }}
            >
              <tr>
                <td
                  style={{
                    backgroundColor: '#72C02C',
                    borderRadius: '3px',
                    width: '200px',
                    height: '50px',
                    margin: 'auto',
                    marginBottom: '10px'
                  }}
                >
                  <Button text={button1Text} link={button1Link} />
                </td>
                <td
                  style={{
                    backgroundColor: '#2F4050',
                    borderRadius: '3px',
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
