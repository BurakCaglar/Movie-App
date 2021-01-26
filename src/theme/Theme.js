import React, { useContext } from "react";
import { ThemeProvider } from "styled-components";
import { ThemeContext } from "../contexts/ThemeStore";

const themes = {
  dark: {
    background: "rgba(2, 9, 22, 1)",
    title: "#fff",
    text: "#fff",
    nav: "rgba(24, 33, 49, 100)",
  },
  light: {
    background: "#f3f9fb",
    title: "#2c365d",
    text: "#000",
    nav: "#2c365d",
  },
};

const Theme = ({ children }) => {
  const { theme } = useContext(ThemeContext);

  return <ThemeProvider theme={themes[theme]}>{children}</ThemeProvider>;
};

export default Theme;
