import { useNavigate } from 'react-router-dom';
import { Board } from '../../types/board/board.type'
import * as S from './style'

const BoardItem = (props:Board) => {

  const navigate = useNavigate();

  return (
    <S.Container onClick={()=>{navigate(`/boards/${props.id}`)}}>
      <S.Title>{props.title}</S.Title>
      <S.Author>{props.author.username}</S.Author>
      <S.InfoWrap>
        <S.OtherInfo>{props.createdAt}</S.OtherInfo>
        <S.OtherInfo>likes: {props.likesCount}</S.OtherInfo>
      </S.InfoWrap>
    </S.Container>
  );
}

export default BoardItem