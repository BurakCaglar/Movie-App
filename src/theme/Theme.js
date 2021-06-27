import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";

const themes = {
  dark: {
    background: "rgba(2, 9, 22, 1)",
    title: "#fff",
    text: "#fff",
    nav: "rgba(24, 33, 49, 100)",
    searchbar: "rgba(255, 255, 255, 0.05)"
  },
  light: {
    background: "#EDEEF7",
    title: "#2c365d",
    text: "#000",
    nav: "#2c365d",
    searchbar: "rgba(53, 31, 57, 0.5)"
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
