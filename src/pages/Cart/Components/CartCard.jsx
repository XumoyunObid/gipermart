import React, { useState } from "react";
import HeartIcon from "../../../assets/icons/HeartIcon";
import TrashIcon from "../../../assets/icons/TrashIcon";
import MinusIcon from "./../../../assets/icons/MinusIcon";
import PlusIcon from "./../../../assets/icons/PlusIcon";
import { useDispatch } from "react-redux";
import {
  removeProduct,
  toggleAmmount,
} from "../../../Redux/Reducers/product-reducer";
import {
  addWishlist,
  removeWishlist,
} from "../../../Redux/Reducers/wishlist-reducer";

const CartCard = ({ id, title, price, img, userCount }) => {
  const dispatch = useDispatch();
  const [wishBtn, setWishBtn] = useState(false);

  const handleDelete = () => {
    dispatch(removeProduct({ id }));
  };

  const handleInc = () => {
    dispatch(toggleAmmount({ type: "ADD", id }));
  };
  const handleDec = () => {
    if (userCount > 1) {
      dispatch(toggleAmmount({ type: "REMOVE", id }));
    }
  };

  const handleLike = () => {
    dispatch(addWishlist({ id }));
    setWishBtn(!wishBtn);
  };

  const handleDisLike = () => {
    dispatch(removeWishlist({ id }));
    setWishBtn(!wishBtn);
  };

  return (
    <div className="flex border-b-2 py-6 justify-between">
      <div className="1/4">
        <img src={img} alt="" />
      </div>
      <div className="flex flex-col gap-5 w-1/2">
        <h1 className="text-2xl font-bold">{title}</h1>
        <div className="flex gap-9 items-center">
          {!wishBtn ? (
            <button
              className="text-gray-500 items-center flex gap-3"
              onClick={handleLike}
            >
              <i className="fa-regular fa-heart"></i> В избранное
            </button>
          ) : (
            <button
              onClick={handleDisLike}
              className="text-gray-500 items-center flex gap-3"
            >
              <i className="fa-solid fa-heart text-red-600"></i>В избранное
            </button>
          )}
          <button
            className="text-gray-500 items-center flex gap-3"
            onClick={handleDelete}
          >
            <TrashIcon /> Удалить
          </button>
        </div>
      </div>
      <div className="flex flex-col gap-5 w-1/4 items-start">
        <h2 className="text-2xl font-bold">{price} Сум</h2>
        <div className="bg-gray-400 p-[2px] flex items-center gap-6">
          <button
            className="flex items-center justify-center px-3 py-5 bg-white text-base"
            onClick={handleDec}
          >
            <MinusIcon />
          </button>
          <span className="text-lg">{userCount}</span>
          <button
            className="flex items-center justify-center px-3 py-3 bg-white text-base"
            onClick={handleInc}
          >
            <PlusIcon />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
