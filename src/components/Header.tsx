import logo from "../assets/logo.png";
import React from "react";

interface HeaderProps {
  logo: string;
}

const Header: React.FC<HeaderProps> = (logo) => {
  return (
    <header className="">
      <img src={logo} alt="A canvas" />
      <h1>ReactArt</h1>
      <p> A community of artistis and art-lovers,</p>
    </header>
  );
};

export default Header;
