import useSignup from "../../hooks/auth/useSignup";
import * as S from "./style";

const Signup = () => {
  const { ...signup } = useSignup();

  return (
    <S.Container>
      <S.LoginForm>
        <S.Title>가온 회원가입</S.Title>
        <S.Input
          type="text"
          placeholder="아이디"
          name="username"
          onChange={signup.handleForm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              signup.submit();
            }
          }}
        />
        <S.Input
          type="password"
          placeholder="비밀번호"
          name="password"
          onChange={signup.handleForm}
          onKeyDown={(e) => {
            if (e.key === "Enter") {
              signup.submit();
            }
          }}
        />
        <S.Navigate to="/login">회원이신가요?</S.Navigate>
        <S.Button onClick={signup.submit} disabled={signup.loading}>
          {!signup.loading ? "회원가입" : "회원가입 중..."}
        </S.Button>
      </S.LoginForm>
    </S.Container>
  );
};

export default Signup;
