import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  flex:1;
  display:flex;
  flex-direction:column;
  padding:4rem;
  box-sizing:border-box;
`

export const Title = styled.p`
  font-size:4rem;
  font-weight:700;
  margin: 3rem 0;
`

export const Label = styled.p`
  font-size:2rem;
  margin-bottom:1rem;
`

export const Input = styled.input`
  width:100%;
  font-size:1.7rem;
  padding:1rem;
  border-radius:1rem;
  border: 0.1rem #ccc solid;
  outline:none;
  background-color:white;
  margin-bottom:3rem;
  box-sizing:border-box;
`

export const TextArea = styled.textarea`
  width: 100%;
  height: 20rem;
  resize: none;
  padding: 1rem;
  border-radius: 1rem;
  border: 0.1rem #ccc solid;
  outline: none;
  background-color: white;
  margin-bottom:5rem;
  font-size:1.5rem;
  box-sizing:border-box;
`;

export const Submit = styled.button`
  height:5rem;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 1rem;
  font-size: 1.6rem;
  transition: all 0.5s;
  cursor: pointer;
  &:active {
    background-color: #0056b3;
  }
  &:disabled {
    background-color: #0056b3;
  }
`;

export const GoBackWrap = styled.div`
  width: 100%;
  height: 7rem;
  display: flex;
  align-items: center;
`;

export const GoBack = styled.img`
  width: 3rem;
  height: 3rem;
  object-fit: cover;
  object-position: center;
  cursor: pointer;
`;