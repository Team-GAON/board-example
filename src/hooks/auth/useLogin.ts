import { useState } from "react";
import { AuthData } from "../../types/auth/auth.type";
import { notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setCookie } from "../../libs/react-cookie/cookie";

const useLogin = () => {
  const [loginData, setLoginData] = useState<AuthData>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async () => {
    if (loginData.username.length === 0 || loginData.password.length === 0) {
      notification.error({
        message: "에러",
        description: "모든 칸을 채워주세요.",
      });
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "https://gaon.cher1shrxd.me/auth/login",
        loginData
      );
      if (res) {
        setCookie("ACCESS_TOKEN", res.data.accessToken, { path: "/" });
        setCookie("REFRESH_TOKEN", res.data.refreshToken, {
          path: "/",
          maxAge: 2600000,
        });
        notification.success({
          message: "로그인 성공!",
          description: "환영합니다!",
        });
        navigate("/");
      }
    } catch(err:any){
      if(err.response && (err.response.status === 401 || err.response.status === 404)) {
        notification.error({
          message: "로그인 실패",
          description: "아이디 또는 비밀번호를 확인해주세요.",
        });
        return;
      }
      notification.error({
        message: "로그인 실패",
        description: "네트워크 에러",
      });
    } finally {
      setLoading(false);
    }
  };

  return {
    loading,
    handleForm,
    submit,
  };
};

export default useLogin;
