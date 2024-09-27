import { useState } from "react"
import { Board } from "../../types/board/board.type";
import instance from "../../libs/axios/customAxios";
import { notification } from "antd";
import { useNavigate } from "react-router-dom";

const useGetDetail = () => {
  const [detail, setDetail] = useState<Board>();

  const navigate = useNavigate();

  const getDetail = async (id:string) => {
    try{
      const res = await instance.get(`/boards/${id}`);
      if(res){
        setDetail(res.data);
      }
    }catch(err:any){
      if(err.response && err.response.statusCode === 401){
        notification.error({message:'토큰이 만료되었습니다.'});
        navigate('/login');
        return;
      }
      notification.error({message:'네트워크 에러'});
      navigate('/');
    }
  }

  return {
    detail,
    getDetail
  }
}

export default useGetDetail