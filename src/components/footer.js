import React from 'react';

const Footer = () => {
  const footerStyle = {
    backgroundColor: '#333',
    color: '#fff',
    padding: '20px',
    marginTop: 'auto',
  };

  const textStyle = {
    textAlign: 'center',
  };

  return (
    <footer style={footerStyle}>
      <div style={textStyle}>
        &copy; {new Date().getFullYear()} Your Website. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
