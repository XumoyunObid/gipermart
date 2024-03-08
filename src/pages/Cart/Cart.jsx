import { useSelector } from "react-redux";
import productReducer from "./../../Redux/Reducers/product-reducer";
import CartCard from "./Components/CartCard";
import Button from "../../Components/UI/Button";

const Cart = () => {
  const { products, count, totalPrice } = useSelector((state) => state.productReducer);


  return (
    <div className="container py-6">
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
          <Button variant="primary" className="w-full">
            Оформить заказ
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
