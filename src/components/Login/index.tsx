import useLogin from "../../hooks/auth/useLogin";
import * as S from "./style";

const Login = () => {
  const { ...login } = useLogin();

  return (
    <S.Container>
      <S.LoginForm>
        <S.Title>가온 로그인</S.Title>
        <S.Input
          type="text"
          placeholder="아이디"
          name="username"
          onChange={login.handleForm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              login.submit();
            }
          }}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={login.handleForm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              login.submit();
            }
          }}
        />
        <S.Navigate to="/signup">처음이신가요?</S.Navigate>
        <S.Button onClick={login.submit} disabled={login.loading}>
          {!login.loading ? "로그인" : "로그인 중..."}
        </S.Button>
      </S.LoginForm>
    </S.Container>
  );
};

export default Login;
