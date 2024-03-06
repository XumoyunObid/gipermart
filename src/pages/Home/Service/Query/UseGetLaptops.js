import { useQuery } from "react-query";
import { request } from "./../../../../Config/request";

const useGetLaptops = () => {
  return useQuery({
    queryKey: ["laptops"],
    queryFn: () => {
      return request.get("/laptops").then((res) => res.data);
    },
  });
};

export default useGetLaptops;
