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
          marginBottom: '0px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box className="teamInfo" align="center" style={{ padding: '20px 30px 0px 30px' }}>
          <Item align="center">
            <h3 className="infoHeader" style={{ marginTop: '10px' }}>
              Team Information:
            </h3>
          </Item>
          <Item align="left">
            <h4 style={{ marginTop: '10px' }}>Name:</h4>
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
          <Item align="center" style={{ align: 'justify', padding: '20px 0px 20px' }}>
            <p style={{ textAlign: 'left' }}>
              More information about your team can be found by navigating to the Prolaera website.
            </p>
            <div
              align="center"
              style={{
                display: 'inline-block',
                margin: 'auto',
                marginBottom: '3px'
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
