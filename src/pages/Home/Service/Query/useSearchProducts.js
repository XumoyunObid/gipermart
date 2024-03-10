import { useQuery } from "react-query";
import { request } from "./../../../../Config/request";

const useSearchAllProducts = (search = "") => {
  return useQuery({
    queryKey: ["searchProducts", search],
    queryFn: () => {
      return request
        .get("/allproducts", { params: { title_like: search } })
        .then((res) => res.data);
    },
  });
};

export default useSearchAllProducts;
