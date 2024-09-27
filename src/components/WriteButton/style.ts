import styled from "styled-components";

export const Container = styled.div`
  width: 6rem;
  height: 6rem;
  background-color: white;
  box-shadow: 0.1rem 0.1rem 1rem 0.1rem #ccc;
  position: fixed;
  bottom: 3rem;
  right: 3rem;
  border-radius: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

export const Write = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  object-position: center;
`;