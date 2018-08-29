import React from 'react';
import { Box, Item } from 'react-html-email';
import Button from '../../components/button';
import setInnerHtml from '../../helpers/domHelpers';
import InfoHeader from '../infoHeader';

class teamInfo extends React.Component {
  render() {
    const { name = '', description = '', buttonText, buttonLink } = this.props;

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          width: '100%',
          margin: 'auto',
          marginBottom: '0',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: '400',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center">
          <Item align="center" width="100%">
            <div
              style={{
                width: '90%',
                margin: 'auto'
              }}
            >
              <InfoHeader info={'Team'} />
            </div>
          </Item>
          <Item align="left" style={{ padding: '0px 40px 0px 40px' }}>
            <h4 style={{ marginBottom: '0' }}>Name:</h4>
            <div
              className="innerHtmlStyles"
              style={{ fontWeight: 'normal' }}
              dangerouslySetInnerHTML={setInnerHtml(name)}
            />
            <h4 style={{ marginBottom: '0' }}>Description:</h4>
            <div
              className="innerHtmlStyles"
              style={{ fontWeight: 'normal' }}
              dangerouslySetInnerHTML={setInnerHtml(description)}
            />
          </Item>
          <Item align="center" style={{ align: 'center', padding: '20px 40px 10px 40px' }}>
            <p style={{ textAlign: 'left' }}>
              More information about your team can be found by navigating to the Prolaera website.
            </p>
            <div
              align="center"
              style={{
                display: 'inline-block',
                margin: 'auto',
                padding: '20px'
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
