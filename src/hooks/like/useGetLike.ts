import { useState } from "react";
import instance from "../../libs/axios/customAxios";

const useGetLike = () => {
  const [isLiked, setIsLiked] = useState<boolean>(false);
  const getLike = async (id: string) => {
    const res = await instance.get(`/likes/${id}`);
    if (res){
      setIsLiked(res.data);
    }
  };

  return {
    isLiked,
    getLike
  }
};

export default useGetLike;
