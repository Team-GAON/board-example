import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import useEdit from "../../hooks/board/useEdit";
import useGetDetail from "../../hooks/board/useGetDetail";
import { useEffect } from "react";

const BoardEdit = () => {
  const navigate = useNavigate();
  const { ...edit } = useEdit();
  const { detail, getDetail } = useGetDetail();
  const params = useParams();

  const goBack = () => {
    navigate(-1);
  };

  useEffect(()=>{
    if(params.id){
      getDetail(params.id);
    }else{
      navigate('/not-found');
    }
  },[]);

  useEffect(()=>{
    if(detail){
      edit.init({title:detail.title, detail:detail.detail, category:detail.category});
    }
  },[detail]);

  return (
    <S.Container>
      <S.GoBackWrap>
        <S.GoBack src="/assets/ep_back.svg" onClick={goBack} />
      </S.GoBackWrap>
      <S.Title>글 수정하기</S.Title>
      <S.Label>제목</S.Label>
      <S.Input
        placeholder="제목을 입력해주세요."
        name="title"
        value={edit.writeData.title}
        onChange={edit.handleForm}
      />
      <S.Label>내용</S.Label>
      <S.TextArea
        placeholder="내용을 입력해주세요."
        name="detail"
        value={edit.writeData.detail}
        onChange={edit.handleForm}
      ></S.TextArea>
      <S.Submit
        onClick={() => {
          if(params.id){
            edit.submit(params.id);
          }
        }}
        disabled={edit.loading}
      >
        {!edit.loading ? "수정하기" : "수정 중..."}
      </S.Submit>
    </S.Container>
  );
};

export default BoardEdit;
