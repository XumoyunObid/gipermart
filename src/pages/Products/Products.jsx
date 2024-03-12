import React from "react";
import { useParams } from "react-router-dom";
import useGetAllCategories from "../Home/Service/Query/useGetAllCategories";
import MainCard from "../../Components/Cards/MainCard";
import useGetCategories from "../Home/Service/Query/UseGetCategories";
import { createFilter } from "../../Redux/Reducers/filter-reducer";
import { useDispatch, useSelector } from "react-redux";
import { filterReducer } from "./../../Redux/Reducers/filter-reducer";

const Products = () => {
  const { datakey } = useParams();
  const { data } = useGetAllCategories(datakey);
  const { data: categories, isLoading } = useGetCategories();
  const attr = categories?.map((item) => item.attribute).flat();
  // const { value } = useSelector((state) => state.filterReducer);

  const changeParams = (value, keyName) => {};
  return (
    <div>
      <div className="container">
        <h1 className="text-2xl font-semibold py-6">Продукты</h1>
        <div className="flex items-start justify-between gap-6">
          <div className="grid grid-cols-6 gap-3">
            {data?.map((item) => (
              <MainCard key={item.id} {...item} />
            ))}
          </div>
          {/* <div className="border w-1/4">
            <form>
              {attr?.map((item, i) => (
                <div key={i}>
                  <p>{item?.name}</p>
                  {item?.values?.map((value, i) => (
                    <div key={i}>
                      <input
                        onChange={() => changeParams(value, item.keyName)}
                        name={item.keyName}
                        value={value}
                        id={i}
                        type="radio"
                      />
                      <label htmlFor={i}>{value}GB</label>
                    </div>
                  ))}
                </div>
              ))}
              <button type="reset">Reset</button>
            </form>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Products;
