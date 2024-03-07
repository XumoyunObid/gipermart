import React from "react";
import { Link, useParams } from "react-router-dom";
import useGetProducts from "./../Home/Service/Query/useGetProducts";
import RatingIcon from "./../../assets/icons/RatingIcon";
import HeartIcon from "./../../assets/icons/HeartIcon";

const SingleProduct = () => {
  const { data, isLoading } = useGetProducts();
  const { id } = useParams();
  const product = data?.find((product) => product?.id === parseInt(id));
  return (
    <div>
      <div className="shadow-xl">
        <ul className="container py-3 flex items-center justify-between">
          <li>
            <Link>Смартфоны и планшеты</Link>
          </li>
          <li>
            <Link>Ноутбуки, планшеты и компьютеры</Link>
          </li>
          <li>
            <Link>Техника для дома</Link>
          </li>
          <li>
            <Link>Игры и развлечения</Link>
          </li>
          <li>
            <Link>Телевизоры, Аудио-видео, Hi-Fi</Link>
          </li>
          <li>
            <Link>Фото и видеотехника</Link>
          </li>
          <li>
            <Link>Еще</Link>
          </li>
        </ul>
      </div>
      <div className="container py-6">
        <h1 className="text-3xl font-semibold">{product?.title}</h1>
        <div className="flex gap-9 items-center py-4">
          <span className="flex gap-3 items-center text-green-500">
            <RatingIcon /> (0)
          </span>
          <button className="flex items-center gap-3">
            <HeartIcon /> В избранное
          </button>
        </div>
        <div className="border-t-2 py-6 flex items-center justify-between">
          <div className="w-1/3 flex items-center justify-center">
            <img className="w-[435px] h-[435px]" src={product?.img} alt="" />
          </div>
          <div className="w-1/3 items-start">
            <div className="flex flex-col gap-2">
              <p className="text-base font-medium">Объем памяти</p>
              <span className="px-3 py-2 border-red-600 text-base">128GB</span>
            </div>
            <div>
              <h1 className="text-lg font-medium">Характеристики</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleProduct;
