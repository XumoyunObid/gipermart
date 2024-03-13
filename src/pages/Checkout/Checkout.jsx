import React, { useState } from "react";
import Button from "../../Components/UI/Button";
import { useDispatch, useSelector } from "react-redux";
import productReducer, {
  removeAllProduct,
} from "./../../Redux/Reducers/product-reducer";
import CheckoutCard from "./Components/CheckoutCard";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { addOrder } from "../../Redux/Reducers/order-reducer";

const Checkout = () => {
  const { products, totalPrice } = useSelector((state) => state.productReducer);
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  const submit = (data) => {
    console.log(data);
    dispatch(addOrder(data));
    toast.success("Заказ успешно оформлен!");
    dispatch(removeAllProduct(data));
    setShow(!show);
    reset();
  };

  return (
    <div className="container flex items-start mt-10">
      <div className="w-1/2 border-r-2 pr-4">
        <h1 className="text-4xl font-semibold mb-14 text-left">
          Оформление заказа
        </h1>
        <p className="text-secondary text-base">Уже покупали у нас?</p>
        <h2 className="text-3xl font-semibold py-3">Контактные данные</h2>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit(submit)}>
          <div className="flex flex-col gap-3">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName">
                Контактное лицо (ФИО) <span className="text-secondary">*</span>
              </label>
              <input
                type="text"
                name="fullName"
                className="w-full border-2 p-2"
                {...register("fullName", { required: true })}
              />
            </div>
            <div>
              <label htmlFor="phone">
                Контактный телефон <span className="text-secondary">*</span>
              </label>
              <input
                type="text"
                name="phone  "
                className="w-full border-2 p-2"
                {...register("phone", { required: true })}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 pb-4">
            <h2 className="text-3xl font-semibold py-3">Доставка</h2>
            <label htmlFor="address">
              Населенный пункт <span className="text-secondary">*</span>
            </label>

            <input
              type="text"
              name="address"
              className="w-full border-2 p-2"
              {...register("address", { required: true })}
            />
          </div>
          <Button variant="primary" className="w-full">
            Подтвердить заказ
          </Button>
        </form>
      </div>
      <div className="w-1/2 pl-4">
        {!show ? (
          <>
            {products ? (
              <>
                <div>
                  {products?.map((item) => (
                    <CheckoutCard key={item.id} {...item} />
                  ))}
                </div>
                <div className="border-y-2 py-4">
                  <h2 className="text-xl flex justify-between items-center text-gray-500">
                    Итого:{" "}
                    <span className="text-2xl font-semibold text-black">
                      {totalPrice} Сум
                    </span>
                  </h2>
                </div>
              </>
            ) : (
              ""
            )}
          </>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default Checkout;
