import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';

class TrackInfo extends React.Component {
  render() {
    const { name = '', author = '', description = '', buttonText, profileId, trackId } = this.props;

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          padding: '20px',
          fontFamily: 'source-sans-pro, sans-serif',
          marginBottom: '0px',
          backgroundColor: '#ffffff'
        }}
      >
        <Box className="trackInfo" align="center" width="100%">
          <Item>
            <h3 style={{ marginTop: '0px' }}>Learning Track Information:</h3>
          </Item>
          <Item align="left">
            <h4 style={{ marginTop: '0px' }}>
              Name: <span style={{ fontWeight: 'normal' }}>{name}</span>
            </h4>
            <h4>
              Author: <span style={{ fontWeight: 'normal' }}>{author}</span>
            </h4>
            <h4 style={{ marginBottom: '0px' }}>Description:</h4>
            <p style={{ marginTop: '10px' }}>{description}</p>
          </Item>
          <Item align="left">
            <p>More information about this track can be found by navigating to the Prolaera website.</p>
            {profileId ? (
              <div
                style={{
                  backgroundColor: '#72C02C',
                  borderRadius: '3px',
                  width: '200px',
                  height: '50px',
                  margin: 'auto',
                  marginBottom: '3px',
                  paddingBottom: '5px',
                  textAlign: 'middle'
                }}
              >
                {profileId ? (
                  <Button
                    text={buttonText}
                    link={'https://app.prolaera.com/#/users/' + profileId + '/learning/track?track=' + trackId}
                  />
                ) : (
                  <span className="buttonSpan" />
                )}
              </div>
            ) : (
              <span className="buttonSpan" />
            )}
          </Item>
        </Box>
      </div>
    );
  }
}

export default TrackInfo;
