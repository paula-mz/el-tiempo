import React from "react";
import Logo from "../../assets/img/imago-logo.png";
import "./style.css";

const Header = (title) => {
  return (
    <nav className="navbar">
      <div>
        <img className='logo' src={Logo} alt='Weather.BCN' />
      </div>
    </nav>
  );
};

export default Header;
