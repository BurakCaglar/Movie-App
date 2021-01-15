import styled from "styled-components";

const Btn = styled.button`
  background-color: ${({ firstButton }) =>
    firstButton ? "hsla(40, 72%, 50%, 1)" : "hsla(347, 49%, 46%, 1)"};
  border: 1px solid
    ${({ firstButton }) =>
      firstButton ? "hsla(40, 72%, 60%, 1)" : "hsla(0, 0%, 0%, 0.4)"};
  white-space: nowrap;
  color: hsla(150, 14%, 97%, 1);
  cursor: pointer;
  outline: none;
  font-size: 1.5rem;
  text-shadow: 0.1rem 0.1rem 0.5rem hsla(0, 0%, 0%, 0.5);
  border-radius: 0.5rem;
  user-select: none;
  padding: 1rem 1rem;
  margin: 0.5rem;
  transition: all 0.1s ease-in;

  ::-moz-focus-inner {
    border: 0;
  }

  &:hover {
    background-color: ${({ firstButton }) =>
      firstButton ? "hsla(40, 72%, 60%, 1)" : "hsla(347, 49%, 51%, 1)"};
    ${({ firstButton }) => firstButton && `transform: translateY(-3px)`}
    color: black;
  }

  &:active {
    background-color: ${({ firstButton }) =>
      firstButton ? "hsla(40, 72%, 35%, 1)" : "hsla(347, 49%, 26%, 1)"};
  }

  @media screen and (max-width: 45em) {
    padding: 1rem 1rem;
    font-size: 1.5rem;
    margin: 0.5rem;
  }
`;

export const BackButton = styled(Btn)`
  position: absolute;
  text-decoration: none;
  background-color: white;
  opacity: 0.5;
  color: black;
  box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.0125),
    0 1px 1px rgba(0, 0, 0, 0.05);
  border-bottom-width: 0.5rem;

  &:hover {
    background-color: white;
  }

  &:active {
    border-bottom-width: 0.1rem;
    border-top-width: 0.5rem;
  }
`;
