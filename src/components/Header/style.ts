import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  height:100px;
  background-color:black;
  display:flex;
  align-items:center;
  padding:0 2rem;
  box-sizing:border-box;
  justify-content:space-between;
`
export const Logo = styled.p`
  font-weight:700;
  font-size:4rem;
  color:white;
`

export const Logout = styled.p`
  font-size:2rem;
  color:#ccc;
  text-decoration:none;
  cursor: pointer;
`
