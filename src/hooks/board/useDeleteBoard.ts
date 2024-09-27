import { useNavigate } from "react-router-dom";
import instance from "../../libs/axios/customAxios";
import { notification } from "antd";
import { useState } from "react";

const useDeleteBoard = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState<boolean>(false);

  const deleteBoard = async (id: string) => {
    if (loading) {
      return;
    }
    try {
      setLoading(true);
      const res = await instance.delete(`/boards/${id}`);
      if (res) {
        notification.success({
          message: "삭제 성공",
          description: "게시글이 성공적으로 삭제되었습니다.",
        });
        navigate("/");
      }
    } catch {
      notification.error({
        message: "삭제 실패",
        description: "네트워크 에러",
      });
    }finally{
      setLoading(false);
    }
  };

  return {
    deleteBoard
  }
};

export default useDeleteBoard;
