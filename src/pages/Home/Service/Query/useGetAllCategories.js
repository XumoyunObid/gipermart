import { useQuery } from "react-query";
import { request } from "./../../../../Config/request";

const useGetAllCategories = (datakey, param) => {
  return useQuery({
    queryKey: ["category", datakey, param],
    queryFn: () => {
      return request
        .get(`/${datakey}`, { params: { ...param } })
        .then((res) => res.data);
    },
  });
};

export default useGetAllCategories;
