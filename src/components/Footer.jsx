import React from "react";
import HeaderMenu from "./HeaderMenu";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container">
        <div className="content">
          <div className="logo_box">
            <img src="./img/logo.jpg" loading="lazy" alt="logo" />
          </div>
          <HeaderMenu />
          <div className="contact_box">
            <div className="telefone_box">
              <div className="img_box">
                <img src="./img/icons/phone_icon.png" alt="phone_number" />
              </div>
              <div className="text_box">
                <span>+48 555 555 555</span>
              </div>
            </div>
            <div className="address_box">
              <div className="img_box">
                <img src="./img/icons/location_icon.png" alt="location" />
              </div>
              <div className="text_box">
                <span>
                  <p>Poznań,</p>
                  <p>os. Kosmonautów 25</p>
                </span>
              </div>
            </div>
            <div className="social_box">
              <a href="https://www.facebook.com/">
                <div className="img_box">
                  <img
                    src="./img/icons/facebook_icon.png"
                    alt="facebook_icon"
                  />
                </div>
              </a>
              <a href="https://www.instagram.com/">
                <div className="img_box">
                  <img
                    src="./img/icons/instagram_icon.png"
                    alt="instagram_icon"
                  />
                </div>
              </a>
              <a href="https://www.tiktok.com/">
                <div className="img_box">
                  <img src="./img/icons/tiktok_icon.png" alt="tiktok_icon" />
                </div>
              </a>
            </div>
          </div>
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
