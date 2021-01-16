import styled from "styled-components";
import { Link } from "react-router-dom";

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

export const Content = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  margin: auto;
`;

export const WrapperContent = styled.div`
  width: 100%;
  max-width: 720px;
  position: relative;
  &:hover ${Content} {
    background: rgba(0, 0, 0, 0.7);
  }
`;

export const Circular = styled.div`
  height: 50%;
  width: 50%;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const ReleaseDate = styled.p`
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%);
  font-size: 2rem;
`;

export const TmdbPoints = styled.p`
  font-size: 1.5rem;
  margin-top: 6rem;
`;

export const Genres = styled.p`
  position: absolute;
  left: 50%;
  bottom: 30%;
  transform: translate(-50%, 30%);
  font-size: 2rem;
`;

export const DetailsButton = styled.div`
  position: absolute;
  left: 50%;
  bottom: 10%;
  transform: translate(-50%, 10%);

  color: white;
  padding: 1rem 1.5rem;
  font-size: 1.2rem;
  border: 2px solid grey;
  border-radius: 0.5rem;
  transition: all 0.2s ease-in;
  display: flex;
  justify-content: center;
  align-items: center;
  letter-spacing: 0.3rem;
  &:hover {
    border: 2px solid white;
    color: white;
  }
`;
