import { useEffect } from 'react';
import useGetBoard from '../../hooks/board/useGetBoard'
import * as S from './style'
import { Board } from '../../types/board/board.type';
import BoardItem from '../BoardItem';

const Main = () => {

  const { board,getBoard } = useGetBoard();

  useEffect(()=>{
    getBoard();
  },[]);

  return (
    <S.Container>
      {
        board.map((item:Board)=>(
          <BoardItem {...item} key={item.id}/>
        ))
      }
    </S.Container>
  )
}

export default Main