import { useQuery } from "react-query";
import { request } from "./../../../../Config/request";

const useGetAllCategories = (datakey) => {
  return useQuery({
    queryKey: ["category", datakey],
    queryFn: () => {
      return request.get(`/${datakey}`).then((res) => res.data);
    },
  });
};

export default useGetAllCategories;
