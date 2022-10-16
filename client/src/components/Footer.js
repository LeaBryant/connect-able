import React from 'react';

const mystyle = {
  color: "white",
  padding: "10px",
  fontFamily: "Arial"
  
};
const Footer = () => {
  return (
    <footer style={mystyle}>
      <div className="container text-center mb-5">
        <h4>&copy; {new Date().getFullYear()} - Team Venus</h4>
      </div>
    </footer>
  );
};

export default Footer;
