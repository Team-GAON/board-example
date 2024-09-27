import { Outlet, useLocation } from "react-router-dom"
import Header from "../Header"
import { Container } from "./style"
import WriteButton from "../WriteButton"
import { useEffect, useState } from "react"

const Layout = () => {

  const [viewState, setViewState] = useState<boolean>(true);
  const location = useLocation();

  useEffect(()=>{
    if(location.pathname === '/write') {
      setViewState(false);
    }else{
      setViewState(true);
    }
  },[location.pathname])

  return (
    <Container>
      <Header />
      <Outlet />
      {viewState && <WriteButton />}
    </Container>
  );
}

export default Layout