import { useQuery } from "react-query";
import { request } from "./../../../../Config/request";

const useGetProducts = () => {
  return useQuery({
    queryKey: ["products"],
    queryFn: () => {
      return request.get("/phones").then((res) => res.data);
    },
  });
};

export default useGetProducts;
