import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import useGetDetail from "../../hooks/board/useGetDetail";
import { useEffect, useState } from "react";
import instance from "../../libs/axios/customAxios";

const BoardDetail = () => {
  const params = useParams();
  const { detail, getDetail } = useGetDetail();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeLoading, setLikeLoading] = useState<boolean>(false);

  const getLike = async (id: string) => {
    const res = await instance.get(`/likes/${id}`);
    if (res) {
      setIsLiked(res.data);
    }
  };

  const unlike = async () => {
    setLikeLoading(true);
    if (params.id) {
      await instance.delete(`/likes/${params.id}`);
      getLike(params.id);
      setTimeout(() => {
        setLikeLoading(false);
      }, 500);
    }
  };

  const like = async () => {
    setLikeLoading(true);
    if (params.id) {
      await instance.post(`/likes/${params.id}`);
      getLike(params.id);
      setTimeout(() => {
        setLikeLoading(false);
      }, 500);
    }
  };

  useEffect(() => {
    if (params.id) {
      getDetail(params.id);
      getLike(params.id);
    } else {
      navigate("/not-found");
    }
  }, [params.id]);

  const goBack = () => {
    navigate(-1);
  };

  return (
    <S.Container>
      <S.GoBackWrap>
        <S.GoBack src="/assets/ep_back.svg" onClick={goBack} />
      </S.GoBackWrap>
      <S.TitleWrap>
        <S.Title>{detail?.title}</S.Title>
        <S.LikeButton onClick={isLiked ? unlike : like} disabled={likeLoading}>
          <S.Like src={isLiked ? "/assets/like.svg" : "/assets/unlike.svg"} />
        </S.LikeButton>
      </S.TitleWrap>
      <S.Border />
      <S.Content>{detail?.detail}</S.Content>
      <S.Border />
      <S.CreatedAt>
        {detail?.createdAt} - {detail?.author.username}
      </S.CreatedAt>
    </S.Container>
  );
};

export default BoardDetail;
