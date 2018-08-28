import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';
import setInnerHtml from '../../helpers/domHelpers';

class teamInfo extends React.Component {
  render() {
    const { name = '', description = '', buttonText, buttonLink } = this.props;

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          maxWidth: '100%',
          fontFamily: 'sans-source-pro, sans-serif',
          marginBottom: '0px',
          backgroundColor: '#ffffff'
        }}
      >
        <Box className="teamInfo" align="center" style={{ padding: '0px 30px 0px 30px' }}>
          <Item align="center">
            <h3 style={{ marginTop: '0px', fontSize: '16pt' }}>Team Information:</h3>
          </Item>
          <Item align="left">
            <h4 style={{}}>Name:</h4>
            <div
              className="innerHtmlStyles"
              style={{ fontWeight: 'normal' }}
              dangerouslySetInnerHTML={setInnerHtml(name)}
            />
            <h4 style={{}}>Description:</h4>
            <div
              className="innerHtmlStyles"
              style={{ fontWeight: 'normal' }}
              dangerouslySetInnerHTML={setInnerHtml(description)}
            />
          </Item>
          <Item align="left" style={{ align: 'justify', paddingTop: '20px' }}>
            <p>More information about your team can be found by navigating to the Prolaera website.</p>
            <div
              style={{
                backgroundColor: '#72C02C',
                color: '#FFFFFF',
                borderRadius: '3px',
                width: '200px',
                height: '50px',
                margin: 'auto',
                marginBottom: '3px',
                textAlign: 'middle'
              }}
            >
              <Button
                color={'#72C02C'}
                text={buttonText}
                link={'https://app.prolaera.com/#/admin/' + buttonLink + '/dashboard'}
              />
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default teamInfo;
