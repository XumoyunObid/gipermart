import { useDispatch, useSelector } from "react-redux";
import HeartIcon from "../../assets/icons/HeartIcon";
import Button from "../UI/Button";
import CartIcon from "./../../assets/icons/CartIcon";
import {
  addProduct,
  removeProduct,
} from "../../Redux/Reducers/product-reducer";
import { Link } from "react-router-dom";
import { loadState } from "../../Config/storage";
import { toast } from "react-toastify";
import { useState } from "react";
import TrashIcon from "../../assets/icons/TrashIcon";
import {
  addWishlist,
  removeWishlist,
} from "../../Redux/Reducers/wishlist-reducer";

const MainCard = (props) => {
  const [wishBtn, setWishBtn] = useState(false);
  const dispatch = useDispatch();

  const wishlist = loadState("wishlist");
  console.log(wishlist.wishlistProducts);

  const handleAddProduct = () => {
    dispatch(addProduct(props));
    setShowBtn(!showBtn);
  };

  const handleRemoveProduct = () => {
    dispatch(removeProduct(props));
    setShowBtn(!showBtn);
  };

  const handleLike = () => {
    dispatch(addWishlist(props));
    setWishBtn(!wishBtn);
  };

  const handleDisLike = () => {
    dispatch(removeWishlist(props));
    setWishBtn(!wishBtn);
  };

  const [showBtn, setShowBtn] = useState(false);
  return (
    <div className="p-2 flex gap-4 justify-around items-center flex-col w-[214px] h-[323px] border shadow-lg mb-4 rounded-lg">
      <div className="flex items-center justify-center relative">
        <Link to={`/products/${props.id}`}>
          <img className="w-[165px] h-[165px]" src={props.img} alt="" />
        </Link>
        {!wishBtn ? (
          <button
            className="absolute top-[-10px] right-[-20px]"
            onClick={handleLike}
          >
            <HeartIcon />
          </button>
        ) : (
          <button onClick={handleDisLike}>
            <i className="fa-solid fa-heart text-red-600 text-[22px] absolute top-[-10px] right-[-18px]"></i>
          </button>
        )}
      </div>
      <div className="flex flex-col justify-between">
        <Link to={`/products/${props.id}`}>
          <h1 className="text-base">{props.title}</h1>
        </Link>
        <div className="flex gap-3 items-center justify-between">
          <span className="text-lg font-semibold">{props.price} Сум</span>
          {!showBtn ? (
            <Button
              variant="primary"
              className="flex items-center justify-center"
              onClick={handleAddProduct}
            >
              <CartIcon />
            </Button>
          ) : (
            <Button
              variant="primary"
              className="flex items-center bg-red-600 justify-center"
              onClick={handleRemoveProduct}
            >
              <i className="fa-solid fa-trash-can"></i>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
};

export default MainCard;
