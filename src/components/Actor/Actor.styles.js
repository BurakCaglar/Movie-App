import styled from "styled-components";

export const Wrapper = styled.div`
  color: var(--white);
  background: rgba(21, 31, 46, 100);
  text-align: center;

  h3 {
    padding: 1.5rem 1.5rem 0 1.5rem;
    font-weight: medium;
    font-size: 1.5rem;
  }

  p {
    padding-bottom: 1.5rem;
    font-size: 1.7rem;
    opacity: 0.7;
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 30rem;
  object-fit: cover;
`;
