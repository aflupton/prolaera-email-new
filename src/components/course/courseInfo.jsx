import React from 'react';
import { Box, Item } from 'react-html-email';
import deliveryHelper from '../../helpers/deliveryHelper';
import setInnerHtml from '../../helpers/domHelpers';
import Button from '../button';

class CourseInfo extends React.Component {
  render() {
    const {
      adminProfileId,
      buttonText,
      buttonLink,
      name = '',
      course_id,
      by = '',
      hours = [{ credits: '', subject_area: '' }],
      delivery_method = 1,
      price = 0,
      courseAudience = '',
      prep = '',
      prerequisites = '',
      level = '',
      objectives = '',
      summary = ''
    } = this.props;

    let newButtonLink = '';
    if (adminProfileId) {
      newButtonLink = 'admin/' + adminProfileId + '/' + buttonLink + '/review';
    } else {
      newButtonLink = 'courses/' + buttonLink;
    }

    return (
      <div
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          padding: '0px 20px 20px',
          fontFamily: 'source-sans-pro, sans-serif',
          fontWeight: '100',
          marginBottom: '0px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box className="courseReview" align="center" width="100%">
          <Item align="left" style={{ padding: '10px' }}>
            <h3 align="center" style={{ marginTop: '5px', letterSpacing: '1pt', fontWeight: '600' }}>
              <span style={{ letterSpacing: '0pt', fontSize: '12pt' }}>Course Information:</span>
            </h3>
            <h4 align="center" style={{ marginTop: '0px', marginBottom: '0px' }}>
              <a
                href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                style={{ textDecoration: 'underline', color: '#2F4050', height: '100%' }}
              >
                <em>{name}</em>
              </a>
            </h4>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '40px' }}>
              <h4 style={{ marginBottom: '0px' }}>
                By:{' '}
                <span className="innerHtmlStyles" style={{ fontWeight: 'normal' }}>
                  {by}
                </span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Description: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(summary)}
              />
              <h4 style={{ marginBottom: '0px' }}>Learning Objectives:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(objectives)}
              />
              <h4 style={{ marginBottom: '0px' }}>Delivery Method:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(deliveryHelper(delivery_method))}
              />
              <h4 style={{ marginBottom: '0px' }}>
                Price:{' '}
                <span className="innerHtmlStyles" style={{ fontWeight: 'normal' }}>
                  {{ price } > 0 ? { price } : 'Free'}
                </span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Recommended CPE Credit(s):</h4>
              <ul style={{ marginTop: '10px' }}>
                <li style={{ fontWeight: 'normal' }}>
                  {hours[0].subject_area} - {hours[0].credits} Hour(s)
                </li>
              </ul>
              <h4 style={{ marginBottom: '0px' }}>
                Level:{' '}
                <span className="innerHtmlStyles" style={{ fontWeight: 'normal' }}>
                  {level}
                </span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Target Audience: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(courseAudience)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prerequisites: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prerequisites)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prep: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prep)}
              />
            </div>
          </Item>
          <Item>
            <div
              style={{
                display: 'inline-block',
                margin: 'auto',
                paddingTop: '20px'
              }}
            >
              <Button color={'#72C02C'} text={buttonText} link={'https://app.prolaera.com/#/' + newButtonLink} />
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseInfo;
