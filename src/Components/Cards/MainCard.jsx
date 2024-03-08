import { useDispatch } from "react-redux";
import HeartIcon from "../../assets/icons/HeartIcon";
import Button from "../UI/Button";
import CartIcon from "./../../assets/icons/CartIcon";
import { addProduct } from "../../Redux/Reducers/product-reducer";
import { Link } from "react-router-dom";
import { loadState } from "../../Config/storage";
import { toast } from "react-toastify";

const MainCard = (props) => {
  const dispatch = useDispatch();
  const handleAddProduct = () => {
    dispatch(addProduct(props));
    toast.success("Product is added to cart!");
  };
  return (
    <div className="p-2 flex gap-4 justify-around items-center flex-col w-[214px] h-[323px] border shadow-lg mb-4 rounded-lg">
      <div className="flex items-center justify-center relative">
        <Link to={`/products/${props.id}`}>
          <img className="w-[165px] h-[165px]" src={props.img} alt="" />
        </Link>
        <button className="absolute top-[-10px] right-[-20px]">
          <HeartIcon />
        </button>
      </div>
      <div className="flex flex-col justify-between">
        <Link to={`/products/${props.id}`}>
          <h1 className="text-base">{props.title}</h1>
        </Link>
        <div className="flex gap-3 items-center justify-between">
          <span className="text-lg font-semibold">{props.price} Сум</span>
          <Button
            variant="primary"
            className="flex items-center justify-center"
            onClick={handleAddProduct}
          >
            <CartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
