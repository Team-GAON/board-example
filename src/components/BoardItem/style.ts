import styled from "styled-components";

export const Container = styled.div`
  width:100%;
  display:flex;
  flex-direction:column;
  cursor: pointer;
  justify-content:space-between;
  padding:2rem;
  box-sizing:border-box;
  box-shadow:0.1rem 0.1rem 1rem 0.1rem #ccc;
  margin: 1rem 0;
  gap:1rem;
`

export const InfoWrap = styled.div`
  width:100%;
  display:flex;
  justify-content:space-between;
`

export const Title = styled.p`
  font-size:2rem;
  font-weight:700;
`

export const Author = styled.p`
  font-size:1.5rem;
  font-weight:300;
`
export const OtherInfo = styled.p`
  font-size:1.2rem;
  font-weight:300;
  color:gray;
`