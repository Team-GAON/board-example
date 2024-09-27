import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  flex: 1;
  display: flex;
  align-items:center;
  flex-direction:column;
  max-width: 150rem;
  padding: 4rem;
  box-sizing: border-box;
`;

export const GoBackWrap = styled.div`
  width:100%;
  height:7rem;
  display:flex;
  align-items:center;
`

export const GoBack = styled.img`
  width:3rem;
  height:3rem;
  object-fit:cover;
  object-position:center;
  cursor: pointer;
`

export const TitleWrap = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
  align-items:center;
`

export const Title = styled.p`
  font-size:4rem;
  font-weight:700;
  align-self:flex-start;
`

export const Content = styled.pre`
  width: 100%;
  background-color: transparent;
  border: none;
  outline: none;
  min-height: 15rem;
  color: none;
  resize: none;
  -webkit-user-select: text;
  -moz-user-select: text;
  -ms-user-select: text;
  user-select: text;
  white-space: pre-wrap;
  word-wrap: break-word;
  font-size:2rem;
`;

export const CreatedAt = styled.p`
  font-size:1.5rem;
  color:#ccc;
  align-self:flex-start;
`

export const Border = styled.div`
  width:100%;
  height:0.1rem;
  background-color:#ccc;
  margin: 2rem 0;
`

export const Like = styled.img`
  width:4rem;
  height:4rem;
  object-fit:cover;
  object-position:center;
  cursor: pointer;
`

export const LikeButton = styled.button`
  background-color:transparent;
  border:none;
  outline:none;
  text-align:center;
`