import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

export const Title = styled.p`
  font-size: 2rem;
  margin-bottom: 2rem;
`;

export const LoginForm = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2rem;
  background: #f1f1f1;
  border-radius: 0.5rem;
  box-shadow: 0 0.2rem 1rem #ccc;
  width: 100%;
  max-width: 40rem;

  @media (max-width: 600px) {
    padding: 1.5rem;
  }
`;

export const Input = styled.input`
  margin-bottom: 1.5rem;
  padding: 1rem;
  background-color: white;
  color: black;
  border: none;
  &::placeholder {
    color: #5f5f5f;
  }
  border-radius: 0.3rem;
  font-size: 1.6rem;
  transition: all 0.3s;
  outline: none;
  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px white inset !important;
    box-shadow: 0 0 0 30px white inset !important;
    -webkit-text-fill-color: black !important;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Button = styled.button`
  padding: 1rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 0.1rem;
  font-size: 1.6rem;
  cursor: pointer;

  &:active {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #0056b3;
  }

  @media (max-width: 600px) {
    font-size: 14px;
  }
`;

export const Navigate = styled(Link)`
  font-size: 1.2rem;
  margin-bottom: 1.5rem;
  color: #ccc;
  text-decoration: none;
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
  width: 7rem;
`;
