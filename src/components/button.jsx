import React from 'react';

class Button extends React.Component {
  render() {
    const { text = '', link } = this.props;
    return (
      <div
        className="customButton"
        align="center"
        style={{ textAlign: 'center', padding: '20px 0px 20px 0px', height: '100%', width: '100%' }}
      >
        <a href={link}>
          <button
            style={{
              height: '100%',
              padding: '14px 14px 14px 14px',
              color: '#ffffff',
              backgroundColor: '#72C02C',
              width: '100%',
              textDecoration: 'none',
              borderRadius: '3px'
            }}
          >
            {text}
          </button>
        </a>
      </div>
    );
  }
}

export default Button;
