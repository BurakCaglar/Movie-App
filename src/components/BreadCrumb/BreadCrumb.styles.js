import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 5rem;
  background: transparent;
  color: var(--white);
`;

export const Content = styled.div`
  display: flex;
  width: 100%;
  max-width: var(--maxWidth);
  padding: 0 2rem;
  span {
    font-size: var(--fontMed);
    color: var(--white);
    padding-right: 1rem;

    @media screen and (max-width: 768px) {
      font-size: var(--fontSmall);
    }
  }
`;
