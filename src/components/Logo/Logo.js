import React from "react";
import mainLogo from "../../assets/images/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <span className="logo fw-bold">
      <img src={mainLogo} alt="" width="80px" /> OtaKu
    </span>
  );
};

export default Logo;
