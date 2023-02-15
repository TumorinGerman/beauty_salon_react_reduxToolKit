import React from "react";
import HeaderMenu from "./HeaderMenu";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="img-box">
            <img src="./img/logo.jpg" loading="lazy" alt="logo" />
          </div>
          <HeaderMenu />
        </div>
      </div>
    </div>
  );
};

export default Footer;
