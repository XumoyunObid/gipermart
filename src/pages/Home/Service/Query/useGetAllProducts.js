import { useQuery } from "react-query";
import { request } from "./../../../../Config/request";

const useGetAllProducts = () => {
  return useQuery({
    queryKey: ["allproducts"],
    queryFn: () => {
      return request.get("/allproducts").then((res) => res.data);
    },
  });
};

export default useGetAllProducts;
