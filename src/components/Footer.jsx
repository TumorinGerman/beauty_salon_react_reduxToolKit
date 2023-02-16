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
      <div className="footer_bottom">
        <div className="footer_copyright">
          <span className="copyright_years">© 2022-2023, </span>
          <a href="https://github.com/TumorinGerman" className="copyright_name">
            Tumorin German
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;
