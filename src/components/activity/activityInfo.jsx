import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../button';

class ActivityInfo extends React.Component {
  render() {
    const {
      name = '',
      author = '',
      profile_uid,
      activity_id,
      buttonText = 'View Details',
      button1Link = 'https://app.prolaera.com/#/users/' + `${profile_uid}` + '/activities' + `${activity_id}`
    } = this.props;

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          marginBottom: '0px',
          textAlign: 'center',
          padding: '20px',
          fontFamily: 'source-sans-pro, sans-serif',
          fontStyle: 'normal',
          fontWeight: '100',
          backgroundColor: '#ffffff'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '10px',
                maxWidth: '300px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <p style={{ marginBottom: '0px', fontSize: '16pt' }}>{name}</p>
              <p style={{ marginTop: '7px' }}>
                By: <span style={{ fontWeight: '300' }}>{author}</span>
              </p>
            </div>
          </Item>
          <Item style={{ paddingBottom: '15px' }}>
            <div
              style={{
                backgroundColor: '#72C02C',
                borderRadius: '3px',
                width: '20%',
                margin: 'auto'
              }}
            >
              <Button color={'#72C02C'} text={buttonText} link={button1Link} />
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default ActivityInfo;
