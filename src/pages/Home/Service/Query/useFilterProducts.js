import { useQuery } from "react-query";
import { request } from "../../../../Config/request";

const useFilterProducts = (param) => {
  return useQuery({
    queryKey: ["filteredProducts", param],
    queryFn: () =>
      request
        .get("/allproducts", { params: { ...param } })
        .then((res) => res.data),
  });
};

export default useFilterProducts;
