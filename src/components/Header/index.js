import React from "react";
import { Link } from "react-router-dom";

import Logo from "../../images/logo.svg";

import BellIcon from "../../images/bell.svg";
import ArrowIcon from "../../images/arrow.svg";

import { Wrapper, Content, LogoImg } from "./Header.styles";

export const Header = () => {
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>
        <div className="side">
          <img src={BellIcon} alt="bellIcon" />
          <img src={ArrowIcon} alt="arrowIcon" />
        </div>
      </Content>
    </Wrapper>
  );
};
