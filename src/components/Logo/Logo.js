import React from "react";
import { Link } from "react-router-dom";
import mainLogo from "../../assets/images/logo.png";
import "./Logo.css";

const Logo = () => {
  return (
    <Link to="/" className="logo fw-bold">
      <img src={mainLogo} alt="" width="80px" /> AnInfo
    </Link>
  );
};

export default Logo;
