import { useNavigate } from 'react-router-dom';
import * as S from './style'

const WriteButton = () => {

  const navigate = useNavigate();

  return (
    <S.Container onClick={()=>{navigate('/write')}}>
      <S.Write src="/assets/write.svg" />
    </S.Container>
  );
}

export default WriteButton