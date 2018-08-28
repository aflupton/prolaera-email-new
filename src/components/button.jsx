import React from 'react';

class Button extends React.Component {
  render() {
    const { text = '', link } = this.props;
    return (
      <div className="customButton" align="center" style={{ textAlign: 'center', height: '100%', width: '100%' }}>
        <a href={link}>
          <button
            className="buttonWidths"
            style={{
              height: '100%',
              padding: '14px 14px 14px 14px',
              color: '#FFFFFF',
              fontSize: '10pt',
              width: '100%',
              textDecoration: 'none',
              borderRadius: '3px',
              backgroundColor: `${this.props.color}`
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
