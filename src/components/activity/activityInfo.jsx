import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../button';
import InfoHeader from '../infoHeader';

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
          margin: 'auto',
          marginBottom: '0px',
          textAlign: 'center',
          padding: '20px',
          fontStyle: 'normal',
          fontWeight: '400',
          backgroundColor: '#ffffff'
        }}
      >
        <Box align="center" width="100%">
          <Item align="center" width="100%">
            <div
              style={{
                margin: 'auto',
                width: '100%',
                backgroundColor: '#FFFFFF'
              }}
            >
              <InfoHeader info={name} />
              <p style={{ paddingTop: '15px', marginTop: '0px' }}>
                By: <span style={{ fontWeight: '300' }}>{author}</span>
              </p>
            </div>
          </Item>
          {/* <Item>
            <div
              style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                marginBottom: '10px',
                maxWidth: '100%',
                backgroundColor: '#FFFFFF'
              }}
            >
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
                  {name}
                </span>
              </div>
              <p style={{ marginTop: '20px' }}>
                By: <span style={{ fontWeight: '300' }}>{author}</span>
              </p>
            </div>
          </Item> */}
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
