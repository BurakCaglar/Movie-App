import styled from "styled-components";

export const Wrapper = styled.div`
  background: rgba(24, 33, 49, 100);
  padding: 0 2rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: var(--maxWidth);
  padding: 2rem 0;
  margin: 0 auto;
  height: 9rem;

  .side {
    display: flex;
    img {
      margin-left: 4rem;
      cursor: pointer;
    }
  }
`;

export const LogoImg = styled.img`
  width: 20rem;
  height: 9rem;
  @media screen and (max-width: 500px) {
    width: 15rem;
  }
`;

export const HamburgerMenu = styled.div`
  width: 5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
