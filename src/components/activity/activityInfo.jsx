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
      header = 'You have been assigned to a new Activity:',
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
          maxWidth: '500px',
          padding: '20px',
          fontFamily: 'source-sans-pro, sans-serif',
          fontStyle: 'normal',
          fontWeight: '100',
          backgroundColor: 'white'
        }}
      >
        <Box align="center" width="100%">
          <Item>
            <h4>{header}</h4>
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '10px',
                maxWidth: '300px',
                backgroundColor: '#FFFFFF'
              }}
            >
              <h3 style={{ marginBottom: '0px' }}>
                <em>{name}</em>
              </h3>
              <h4 style={{ marginTop: '7px' }}>
                By: <span style={{ fontWeight: 'normal' }}>{author}</span>
              </h4>
            </div>
          </Item>
          <Item style={{ paddingBottom: '15px' }}>
            <div
              style={{
                backgroundColor: '#72C02C',
                borderRadius: '3px',
                width: '200px',
                marginLeft: 'auto',
                marginRight: 'auto'
              }}
            >
              <Button text={buttonText} link={button1Link} />
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default ActivityInfo;
