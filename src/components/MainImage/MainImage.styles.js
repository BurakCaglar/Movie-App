import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(rgba(2, 9, 22, 0.12), rgba(2, 9, 22, 100)),
    url(${({ image }) => image}) center fixed;

  background-size: 100%, cover;
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  height: 50rem;
  position: relative;
  animation: animateMainImage 1s;

  @keyframes animateMainImage {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Content = styled.div``;

export const Text = styled.div`
  z-index: 100;
  max-width: 70rem;
  position: absolute;
  bottom: 4rem;
  margin-left: 10rem;
  margin-top: 17rem;
  margin-bottom: 17rem;
  min-height: 10rem;
  color: var(--white);

  h1 {
    font-size: 5rem;
    font-family: "SFProDisplayBold";

    @media screen and (max-width: 720px) {
      font-size: var(--fontBig);
    }
  }

  p {
    font-size: var(--fontMed);

    @media screen and (max-width: 720px) {
      font-size: var(--fontSmall);
    }
  }

  @media screen and (max-width: 720px) {
    max-width: 100%;
  }
`;
