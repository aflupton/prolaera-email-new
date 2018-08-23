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
        id="subHeaderWrapper"
        style={{
          display: 'block',
          marginLeft: 'auto',
          marginRight: 'auto',
          textAlign: 'center',
          padding: '20px',
          fontFamily: 'source-sans-pro, sans-serif',
          fontWeight: '100',
          marginBottom: '0px',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box className="courseReview" align="center" width="100%">
          <Item align="left">
            <h3 align="center" style={{ marginTop: '5px', fontSize: '16pt' }}>
              Course Information:
            </h3>
            <h4 align="center" style={{ marginTop: '0px', marginBottom: '0px' }}>
              <a
                href={'https://app.prolaera.com/#/courses/' + `${course_id}`}
                style={{ textDecoration: 'underline', color: '#2F4050', height: '100%' }}
              >
                <em>
                  {name} ({deliveryHelper(delivery_method)})
                </em>
              </a>
            </h4>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '40px' }}>
              <h4>
                By: <span style={{ fontWeight: 'normal' }}>{by}</span>
              </h4>
              <h4 style={{ marginBottom: '0px' }}>Recommended CPE Credit(s):</h4>
              <ul style={{ marginTop: '10px' }}>
                <li style={{ fontWeight: 'normal' }}>
                  {hours[0].subject_area} - {hours[0].credits} Hour(s)
                </li>
              </ul>
              <h4 style={{ marginBottom: '0px' }}>Price:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml({ price } > 0 ? { price } : 'Free')}
              />
              <h4 style={{ marginBottom: '0px' }}>Target Audience: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(courseAudience)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prep: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prep)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prerequisites: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prerequisites)}
              />
              <h4 style={{ marginBottom: '0px' }}>Level: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(level)}
              />
              <h4 style={{ marginBottom: '0px' }}>Learning Objectives: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(objectives)}
              />
              <h4 style={{ marginBottom: '0px' }}>Description: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(summary)}
              />
            </div>
          </Item>
          <Item>
            <div
              style={{
                backgroundColor: '#72C02C',
                color: '#ffffff',
                borderRadius: '3px',
                width: '200px',
                height: '50px',
                padding: '0px 0px 5px 0px',
                margin: 'auto',
                marginBottom: '3px',
                textAlign: 'middle'
              }}
            >
              <Button text={buttonText} link={'https://app.prolaera.com/#/' + newButtonLink} />
            </div>
          </Item>
        </Box>
      </div>
    );
  }
}

export default CourseInfo;
