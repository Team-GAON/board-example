import { useState } from "react";
import { AuthData } from "../../types/auth/auth.type";
import { notification } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const useSignup = () => {
  const [signupData, setSignupData] = useState<AuthData>({
    username: "",
    password: "",
  });
  const [loading, setLoading] = useState<boolean>(false);

  const navigate = useNavigate();

  const handleForm = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setSignupData((prev) => ({ ...prev, [name]: value }));
  };

  const submit = async () => {
    if (signupData.username.trim().length === 0 || signupData.password.trim().length === 0) {
      notification.error({
        message: "에러",
        description: "모든 칸을 채워주세요.",
      });
      return;
    }
    try {
      setLoading(true);
      const res = await axios.post(
        "https://gaon.cher1shrxd.me/auth/signup",
        signupData
      );
      if (res) {
        notification.success({
          message: "성공",
          description: "서비스 이용을 위해 로그인 해주세요.",
        });
        navigate("/login");
      }
    } catch (err: any) {
      console.log(err);
      if (err.response && err.response.status === 409) {
        notification.error({
          message: "회원가입 실패",
          description: "이미 사용 중인 아이디입니다.",
        });
        return;
      }
      notification.error({
        message: "회원가입 실패",
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

export default useSignup;
