import { useDispatch, useSelector } from "react-redux";
import productReducer, {
  removeAllProduct,
} from "./../../Redux/Reducers/product-reducer";
import CartCard from "./Components/CartCard";
import Button from "../../Components/UI/Button";
import { useNavigate } from "react-router-dom";
import { loadState } from "../../Config/storage";
import { toast } from "react-toastify";

const Cart = () => {
  const token = loadState("user");
  const dispatch = useDispatch();
  const { products, count, totalPrice } = useSelector(
    (state) => state.productReducer
  );
  const navigate = useNavigate();
  console.log(products);

  const toHome = () => {
    navigate("/");
  };

  const handleBuy = () => {
    if (!token) {
      toast.error("Зарегистрируйтесь или авторизуйтесь!");
    } else {
      toast.success("Продукты куплены успешно!");
      dispatch(removeAllProduct(products));
    }
  };
  return (
    <div className="container py-6">
      {products.length ? (
        <div>
          <h1 className="text-lg font-semibold py-4">Корзина</h1>
          <div className="flex items-start justify-between">
            <div className="w-4/5">
              {products?.map((item) => (
                <CartCard key={item.id} {...item} />
              ))}
            </div>
            <div className="bg-neutral w-1/5">
              <div className="p-6 flex flex-col gap-4 items-start">
                <h1 className="text-2xl font-medium">В корзине</h1>
                <p>Товаров: {count}</p>
                <p className="text-red-500">Введите промокод</p>
                <h2 className="text-2xl font-semibold">{totalPrice} Сум</h2>
              </div>
              <Button variant="primary" className="w-full" onClick={handleBuy}>
                Оформить заказ
              </Button>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <span>
            <i className="fa-solid fa-cart-arrow-down text-5xl text-primary"></i>
          </span>
          <h1 className="text-4xl font-semibold">Корзина пуста</h1>
          <p>Но вы всегда можете ее наполнить</p>
          <Button variant="primary" onClick={toHome}>
            На главную
          </Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
