import styled from "styled-components";
import { IMAGE_BASE_URL, BACKDROP_SIZE } from "../../config";

export const Wrapper = styled.div`
  background: ${({ backdrop }) =>
    backdrop ? `url(${IMAGE_BASE_URL}${BACKDROP_SIZE}${backdrop});` : "#000"};
  background-size: cover;
  background-position: center;

  animation: animateMovieDetail 1s;

  @keyframes animateMovieDetail {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export const ContentWrapper = styled.div`
  padding: 4rem 2rem;
  width: 100%;
  background: rgba(0, 0, 0, 0.2);
`;

export const Content = styled.div`
  display: flex;
  max-width: var(--maxWidth);
  margin: 0 auto;
  background: rgba(0, 0, 0, 0.7);
  border-radius: 2rem;

  @media screen and (max-width: 768px) {
    display: block;
    max-height: none;
  }

  img {
    width: 70% !important;
    height: 60rem;

    :hover {
      opacity: 1;
    }
  }
`;

export const Text = styled.div`
  width: 100%;
  padding: 2rem;
  margin-right: 20rem;
  color: var(--white);
  overflow: hidden;

  > p {
    font-family: SFTextLight;
    font-size: 1.7rem;
    letter-spacing: 0.3rem;
  }

  .rating-directors {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 3.5rem;
    height: 3.5rem;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 50%;
    margin: 0;
  }

  .director {
    margin: 0;
    font-family: SFTextLight;
    font-size: 1.5rem;
    letter-spacing: 0.3rem;

    p {
      margin: 0;
      font-family: SFTextLight;
      font-size: 1.7rem;
      letter-spacing: 0.3rem;
    }
  }

  h1 {
    font-family: SFProDisplaySemibold;
    font-size: 5.8rem;
    @media screen and (max-width: 768px) {
      font-size: var(--fontBig);
    }
  }
`;
