import { createGlobalStyle } from "styled-components";
import SFProDisplayBold from "./fonts/SFProDisplayBold.ttf";
import SFProDisplayMedium from "./fonts/SFProDisplayMedium.ttf";
import SFProDisplaySemibold from "./fonts/SFProDisplaySemibold.ttf";
import SFProDisplayRegular from "./fonts/SFProDisplayRegular.ttf";
import SFTextLight from "./fonts/SFTextLight.otf";
import SFProTextRegular from "./fonts/SFProTextRegular.ttf";
import SFProTextMedium from "./fonts/SFProTextMedium.ttf";

export const GlobalStyle = createGlobalStyle`
@font-face {
    font-family: SFProDisplayBold;
    src: url(${SFProDisplayBold}) format('truetype');
    font-weight: bold;
  }
  @font-face {
    font-family: SFProDisplayMedium;
    src: url(${SFProDisplayMedium}) format('truetype');
    font-weight: medium;
  }
  @font-face {
    font-family: SFProDisplaySemibold;
    src: url(${SFProDisplaySemibold}) format('truetype');
  }
  @font-face {
    font-family: SFProDisplayRegular;
    src: url(${SFProDisplayRegular}) format('truetype');
  }
  @font-face {
    font-family: SFTextLight;
    src: url(${SFTextLight}) format('truetype');
    font-weight: --lightGrey;
  }
  @font-face {
    font-family: SFProTextRegular;
    src: url(${SFProTextRegular}) format('truetype');
  }
  @font-face {
    font-family: SFProTextMedium;
    src: url(${SFProTextMedium}) format('truetype');
  }
:root {
    --maxWidth: 1280px;
    --white: #fff;
    --lightGrey: #eee;
    --medGrey: #353535;
    --darkGrey: #1c1c1c;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
}

* {
    box-sizing: border-box;
    font-family: 'Abel', sans-serif;
}

html {
    font-size: 10px;
}

body {
    margin: 0;
    padding: 0;
    background-color: rgba(2, 9, 22, 1);

    h1 {
        font-size: 2rem;
        font-weight: 600;
        color: var(--white);
    }

    h3 {
        font-size: 1.1.rem;
        font-weight: 600;
    }

    p {
        font-size: 1rem;
        color: var(--white);
    }
}
`;
