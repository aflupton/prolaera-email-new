import React from 'react';

class Button extends React.Component {
  render() {
    const { text = '', link } = this.props;
    return (
      <div
        className="customButton"
        align="center"
        style={{ maxWidth: '100%', textAlign: 'center', padding: '20px 0px 20px 0px' }}
      >
        <a
          href={link}
          style={{
            width: '400px',
            backgroundColor: '#72C02C',
            padding: '14px 14px 14px 14px',
            color: 'white',
            textDecoration: 'none',
            borderRadius: '5px'
            // boxShadow: '1px 1px 8px darkgray'
          }}
        >
          {text}
        </a>
      </div>
    );
  }
}

export default Button;
