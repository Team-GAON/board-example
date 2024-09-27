import { Outlet } from "react-router-dom"
import Header from "../Header"
import { Container } from "./style"
import WriteButton from "../WriteButton"

const Layout = () => {
  return (
    <Container>
      <Header />
      <Outlet/>
      <WriteButton />
    </Container>
  )
}

export default Layout