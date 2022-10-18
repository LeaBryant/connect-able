import React from 'react';

const mystyle = {
  color: "white",
  padding: "10px",
  fontFamily: "Arial"
  
};

const Nav = () => {
  return (
<div style={mystyle}>
<ul className="nav justify-content-end">
  <li className="nav-item">
    <a className="nav-link" href="/Login">Logout</a>
  </li>
</ul>
</div>
  );
};

export default Nav;
