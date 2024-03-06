import { useQuery } from "react-query";
import { request } from "./../../../../Config/request";

const useGetBrands = () => {
  return useQuery({
    queryKey: ["brand"],
    queryFn: () => {
      return request.get("/brand").then((res) => res.data);
    },
  });
};

export default useGetBrands;
