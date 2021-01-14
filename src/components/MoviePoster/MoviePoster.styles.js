import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  max-width: 720px;
  position: relative;
`;

export const Image = styled.img`
  width: 100%;
  transition: all 0.3s;
  border-radius: 1rem;
  animation: animateThumb 0.5s;

  :hover {
    opacity: 0.8;
  }

  @keyframes animateThumb {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
  z-index: 100;
  top: 0.6rem;
  left: 0.6rem;
  position: absolute;

  color: var(--white);
  font-size: 2rem;

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 4rem;
    height: 4rem;
    background: #fff;

    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  h1 {
    font-size: 4rem;
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
