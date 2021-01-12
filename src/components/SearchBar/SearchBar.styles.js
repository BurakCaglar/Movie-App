import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 10rem;
  width: 50rem;
  margin-left: auto;
  margin-right: auto;
  padding: 0 20px;

  @media screen and (max-width: 500px) {
    width: 30rem;
  }
`;

export const Content = styled.div`
  position: relative;
  max-width: var(--maxWidth);
  width: 100%;
  height: 5.5rem;
  background: rgba(255, 255, 255, 0.05);
  margin: 0 auto;
  border-radius: 4rem;
  color: var(--white);

  img {
    position: absolute;
    height: 2.6rem;
    right: 1.5rem;
    top: 1.7rem;
    width: 3rem;
  }

  input {
    font-size: 2rem;
    position: absolute;
    left: 0;
    margin: 0.8rem 0;
    padding: 0 0 0 6rem;
    border: 0;
    width: 95%;
    background: transparent;
    height: 4rem;
    color: white;

    font-family: SFProTextLight;
    ::placeholder {
      color: white;
    }

    :focus {
      outline: none;
    }
  }
`;
