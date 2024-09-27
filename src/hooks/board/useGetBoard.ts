import { useState } from "react"
import { Board } from "../../types/board/board.type";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";
import instance from "../../libs/axios/customAxios";

const useGetBoard = () => {
  const [board, setBoard] = useState<Board[]>([]);

  const navigate = useNavigate();

  const getBoard = async () => {
    try{
      const res = await instance.get('/boards');
      if(res){
        setBoard(res.data);
      }
    }catch(err:any){
      if (err.response && err.response.statusCode === 401) {
        notification.error({ message: "토큰이 만료되었습니다." });
        navigate("/login");
        return;
      }
      notification.error({ message: "네트워크 에러" });
    }
  }

  return {
    board,
    getBoard
  }
}

export default useGetBoard