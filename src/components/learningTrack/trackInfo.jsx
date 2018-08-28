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
          marginBottom: '0px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center" width="100%">
          <Item align="center" style={{ paddingBottom: '30px' }}>
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
                  fontWeight: 'lighter',
                  boxSizing: 'border-box',
                  margin: '0'
                }}
              >
                Learning Track Information
              </span>
            </div>
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
          <Item>
            <p>More information about this track can be found by navigating to the Prolaera website.</p>
            {profileId ? (
              <div
                style={{
                  display: 'inline-block',
                  margin: 'auto',
                  paddingBottom: '5px',
                  textAlign: 'center'
                }}
              >
                {profileId ? (
                  <Button
                    color={'#72C02C'}
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
