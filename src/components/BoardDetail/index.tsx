import { useNavigate, useParams } from "react-router-dom";
import * as S from "./style";
import useGetDetail from "../../hooks/board/useGetDetail";
import { useEffect, useState } from "react";
import instance from "../../libs/axios/customAxios";
import useGetMe from "../../hooks/auth/useGetMe";
import useDeleteBoard from "../../hooks/board/useDeleteBoard";

const BoardDetail = () => {
  const params = useParams();
  const { detail, getDetail } = useGetDetail();
  const { username, getMe, loading } = useGetMe();
  const { deleteBoard } = useDeleteBoard();
  const navigate = useNavigate();
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const [likeLoading, setLikeLoading] = useState<boolean>(false);
  const [manageModal, setManageModal] = useState<boolean>(false);

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
      getMe();
    } else {
      navigate("/not-found");
    }
  }, [params.id]);

  const goBack = () => {
    navigate(-1);
  };

  const handleModal = () => {
    setManageModal(!manageModal);
  };

  useEffect(() => {
    const handleClick = (e: any) => {
      if (e.target) {
        if (
          !e.target.className.includes("modal") &&
          !e.target.className.includes("modalBtn")
        ) {
          setManageModal(false);
        }
      }
    };

    document.documentElement.addEventListener("click", handleClick);

    return () => {
      document.documentElement.removeEventListener("click", handleClick);
    };
  }, []);

  return (
    <S.Container>
      <S.GoBackWrap>
        <S.GoBack src="/assets/ep_back.svg" onClick={goBack} />
      </S.GoBackWrap>
      <S.TitleWrap>
        <S.Title>{detail?.title}</S.Title>
        {!loading && (
          <>
            {username === detail?.author.username ? (
              <S.Button>
                <S.ManageIcon
                  src="/assets/setting.svg"
                  onClick={handleModal}
                  className="modalBtn"
                />
                {manageModal && (
                  <S.ManageWrap className="modal">
                    <S.ManageItem
                      onClick={() => {
                        navigate(`/edit/${params.id}`);
                      }}
                    >
                      수정
                    </S.ManageItem>
                    <S.ManageItem
                      style={{ color: "red" }}
                      onClick={() => {
                        if (params.id) {
                          deleteBoard(params.id);
                        }
                      }}
                    >
                      삭제
                    </S.ManageItem>
                  </S.ManageWrap>
                )}
              </S.Button>
            ) : (
              <S.Button
                onClick={isLiked ? unlike : like}
                disabled={likeLoading}
              >
                <S.Like
                  src={isLiked ? "/assets/like.svg" : "/assets/unlike.svg"}
                />
              </S.Button>
            )}
          </>
        )}
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
