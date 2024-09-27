import { useState } from "react"
import instance from "../../libs/axios/customAxios";
import { notification } from "antd";

const useGetMe = () => {
  const [username,setUsername] = useState('');
  const [loading, setLoading] = useState<boolean>(false);
  const getMe = async () => {
    try{
      setLoading(true);
      const res = await instance.get('/auth/me');
      if(res){
        setUsername(res.data.username);
      }
    }catch{
      notification.error({message:'유저 조회 실패',description:'네트워크 에러'});
    }finally{
      setLoading(false);
    }
  }
  return{
    username,
    getMe,
    loading
  }
}

export default useGetMe