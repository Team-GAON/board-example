import { useNavigate } from 'react-router-dom';
import { getCookie, removeCookie } from '../../libs/react-cookie/cookie'
import * as S from './style'
import { notification } from 'antd';

const Header = () => {

  const ACCESS_TOKEN = getCookie('ACCESS_TOKEN');

  const navigate = useNavigate();

  const logout = () => {
    removeCookie('ACCESS_TOKEN');
    removeCookie('REFRESH_TOKEN');
    notification.success({message:'로그아웃 성공',description:'로그아웃 되었습니다.'});
    navigate('/login');
  }


  return (
    <S.Container>
      <S.Logo>GAON</S.Logo>
      {
        ACCESS_TOKEN && <S.Logout onClick={logout}>로그아웃</S.Logout>
      }
    </S.Container>
  )
}

export default Header