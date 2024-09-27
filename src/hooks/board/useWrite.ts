import { useState } from "react"
import { WriteData } from "../../types/board/write.type";
import { notification } from "antd";
import instance from "../../libs/axios/customAxios";
import { useNavigate } from "react-router-dom";

const useWrite = () => {
  const [writeData, setWriteData] = useState<WriteData>({title:'',detail:'',category:'FREE'});
  const [loading, setLoading] = useState<boolean>(false);
  const navigate = useNavigate();

  const handleForm = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setWriteData((prev)=>({...prev,[name]:value}));
  }

  const submit = async () => {
    if(writeData.title.trim().length === 0 || writeData.detail.trim().length === 0) {
      notification.error({message:'에러',description:'모든 필드를 채워주세요.'});
      return;
    }
    try{
      setLoading(true);
      const res = await instance.post('/boards',writeData);
      if(res){
        notification.success({message:'게시 성공!',description:'글이 성공적으로 게시되었습니다.'});
        navigate('/');
      }
    }catch{
      notification.error({message:'게시 실패',description:'네트워크 에러'});
    }finally{
      setLoading(false);
    }
  }

  return {
    loading,
    handleForm,
    submit,
    writeData
  }
}

export default useWrite