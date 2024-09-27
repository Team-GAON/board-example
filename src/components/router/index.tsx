import { BrowserRouter, Route, Routes } from "react-router-dom"
import Layout from "../layout";
import Main from "../Main";
import Login from "../Login";
import Signup from "../Signup";
import BoardDetail from "../BoardDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<Main />}/>
          <Route path="/boards/:id" element={<BoardDetail />}/>
          <Route path="/write" />
        </Route>
        <Route path="/login" element={<Login />}/>
        <Route path="/signup" element={<Signup />}/>
        <Route path="*" />
      </Routes>
    </BrowserRouter>
  );
}

export default Router