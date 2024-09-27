import instance from "../../libs/axios/customAxios"

const useUnLike = () => {
  const unlike = async (id:string) => {
    await instance.post(`/likes/${id}`);
  }
}

export default useUnLike