import React from "react";
import { Link } from "react-router-dom";

import Menu from "./Menu";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_top">
          <Link to="/">
            <div className="logo-box">
              <div className="img-box">
                <img src="./img/logo.png" alt="logo" />
              </div>
              <div className="text-box">
                <p>Gabinet</p>
                <p>kosmetyczny</p>
              </div>
            </div>
          </Link>
          <div className="address-box">
            <div className="img-box">
              <img src="./img/icons/location_icon.png" alt="location" />
            </div>
            <div className="text-box">
              <p>Poznań,</p>
              <p>os Kosmonautów 25/58</p>
            </div>
          </div>
          <div className="timeWork-box">
            <div className="img-box">
              <img src="./img/icons/time_icon.png" alt="work_time" />
            </div>
            <div className="text-box">
              <p>Pn-Sb: 10:00-19:00</p>
              <p>Nd: po uzgodnieniu</p>
            </div>
          </div>
          <div className="social-box">
            <a href="https://www.facebook.com/">
              <img src="./img/icons/facebook_icon.png" alt="facebook_icon" />
            </a>
            <a href="https://www.instagram.com/">
              <img src="./img/icons/instagram_icon.png" alt="instagram_icon" />
            </a>
            <a href="https://www.tiktok.com/">
              <img src="./img/icons/tiktok_icon.png" alt="tiktok_icon" />
            </a>
          </div>
          <div className="telefone-box">
            <div className="img-box">
              <img src="./img/icons/phone_icon.png" alt="phone_number" />
            </div>
            <div className="text-box">
              <p>+48 555 555 555</p>
            </div>
          </div>
          <div className="lang-box">
            <p>Polski</p>
          </div>
        </div>
        <div className="header_bottom">
          <Menu />
        </div>
      </div>
    </div>
  );
};

export default Header;
