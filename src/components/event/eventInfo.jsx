import React from 'react';
import { Box, Item } from 'react-html-email';
import { PrettyDate } from '../../helpers/dateHelpers';
import deliveryHelper from '../../helpers/deliveryHelper';
import setInnerHtml from '../../helpers/domHelpers';
import Button from '../button';
import InfoHeader from '../infoHeader';

class EventInfo extends React.Component {
  render() {
    const {
      buttonText,
      event_id,
      course_name = '',
      buttonLink = 'https://app.prolaera.com/#/events/' + `${event_id}`,
      delivery_date = '',
      delivery_end_date = '',
      hours = [],
      delivery_location = '',
      delivery_method = 1,
      price = 0,
      courseAudience = '',
      prep = '',
      prerequisites = '',
      level = '',
      objectives = '',
      summary = ''
    } = this.props;

    let newPrerequisites = prerequisites.trim();

    return (
      <div
        id="subHeaderWrapper"
        style={{
          display: 'block',
          margin: 'auto',
          textAlign: 'center',
          fontStyle: 'normal',
          fontWeight: '400',
          backgroundColor: '#FFFFFF'
        }}
      >
        <Box align="center" width="100%">
          <Item align="center" width="100%">
            <div
              style={{
                width: '90%',
                margin: 'auto'
              }}
            >
              <InfoHeader info={'Event'} />
            </div>
            <h4 align="center">
              <a
                href={'https://app.prolaera.com/#/events/' + `${event_id}`}
                style={{ textDecoration: 'underline', color: '#2F4050', height: '100%' }}
              >
                <em>
                  {course_name} ({deliveryHelper(delivery_method)})
                </em>
              </a>
            </h4>
          </Item>
          <Item align="left">
            <div style={{ paddingLeft: '40px' }}>
              <h4>Start Time:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(PrettyDate(delivery_date))}
              />
              <h4>End Time:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(PrettyDate(delivery_end_date))}
              />
              <h4 style={{ marginBottom: '0px' }}>Recommended CPE Credit(s):</h4>
              <ul style={{ marginTop: '10px' }}>
                {hours.map((hour, index) => (
                  <li key={index} style={{ padding: '5px' }}>
                    {hour.subject_area} - {hour.credits} Hour(s)
                  </li>
                ))}
              </ul>
              <h4>Location:</h4>
              <div className="innerHtmlStyles" style={{ fontWeight: 'normal' }}>
                <a
                  style={{ textDecoration: 'underline', color: 'inherit' }}
                  href={'https://www.google.com/maps/place/' + `${delivery_location}`}
                >
                  <span style={{ fontWeight: 'normal' }}>{delivery_location}</span>
                </a>
              </div>
              <h4>Delivery Method:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(deliveryHelper(delivery_method))}
              />
              <h4>Price: </h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml('$' + price + '.00')}
              />
              <h4>Target Audience:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(courseAudience)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prep:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(prep)}
              />
              <h4 style={{ marginBottom: '0px' }}>Prerequisites:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(newPrerequisites)}
              />
              <h4>Level:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(level)}
              />
              <h4 style={{ marginBottom: '0px' }}>Learning Objectives:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'norma;' }}
                dangerouslySetInnerHTML={setInnerHtml(objectives)}
              />
              <h4 style={{ marginBottom: '0px' }}>Summary:</h4>
              <div
                className="innerHtmlStyles"
                style={{ fontWeight: 'normal' }}
                dangerouslySetInnerHTML={setInnerHtml(summary)}
              />
            </div>
          </Item>
          <Item align="center" style={{ width: '100%', paddingBottom: '20px' }}>
            {buttonText ? (
              <div
                style={{
                  display: 'inline-block',
                  margin: 'auto',
                  padding: '20px'
                }}
              >
                {buttonText ? (
                  <Button color={'#72C02C'} text={buttonText} link={buttonLink} />
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

export default EventInfo;
