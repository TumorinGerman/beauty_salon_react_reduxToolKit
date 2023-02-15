import React from "react";

import HeaderTop from "./HeaderTop";
import HeaderMenu from "./HeaderMenu";

const Header = () => {
  return (
    <div className="header">
      <div className="container">
        <div className="header_top">
          <HeaderTop />
        </div>
        <div className="header_bottom">
          <HeaderMenu isHorizontal={true} />
        </div>
      </div>
    </div>
  );
};

export default Header;
