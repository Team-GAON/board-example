import { useNavigate } from 'react-router-dom';
import * as S from './style'
import useWrite from '../../hooks/board/useWrite';

const Write = () => {

  const navigate = useNavigate();
  const { ...write } = useWrite();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.GoBackWrap>
        <S.GoBack src="/assets/ep_back.svg" onClick={goBack} />
      </S.GoBackWrap>
      <S.Title>글쓰기</S.Title>
      <S.Label>제목</S.Label>
      <S.Input placeholder="제목을 입력해주세요." name='title' value={write.writeData.title} onChange={write.handleForm}/>
      <S.Label>내용</S.Label>
      <S.TextArea placeholder="내용을 입력해주세요." name='detail' value={write.writeData.detail} onChange={write.handleForm}></S.TextArea>
      <S.Submit onClick={write.submit} disabled={write.loading}>{!write.loading ? '게시하기' : '게시 중...'}</S.Submit>
    </S.Container>
  );
}

export default Write