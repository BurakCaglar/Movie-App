import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Logo from "../../images/logo.svg";
import BellIcon from "../../images/bell.svg";
import ArrowIcon from "../../images/arrow.svg";
import { ThemeContext } from "../../contexts/ThemeStore";
import { useHomeFetch } from "../../hooks/useHomeFetch";

import {
  Wrapper,
  Content,
  LogoImg,
  StyledSun,
  StyledMoon,
} from "./Header.styles";
import SearchBar from "../SearchBar";

export const Header = () => {
  const { setSearchTerm } = useHomeFetch();
  const { theme, switchTheme } = useContext(ThemeContext);
  
  return (
    <Wrapper>
      <Content>
        <Link to="/">
          <LogoImg src={Logo} alt="logo" />
        </Link>
        
        {/* <div className="side">
          <img src={BellIcon} alt="bellIcon" />
          <img src={ArrowIcon} alt="arrowIcon" />
        </div> */}
        {theme === "light" ? (
          <StyledMoon size={32} onClick={() => switchTheme("dark")} />
        ) : (
          <StyledSun size={32} onClick={() => switchTheme("light")} />
        )}
      </Content>
    </Wrapper>
  );
};
