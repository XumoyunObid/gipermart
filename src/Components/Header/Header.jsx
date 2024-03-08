import React, { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import PhoneIcon from "./../../assets/icons/PhoneIcon";
import LogoIcon from "./../../assets/icons/LogoIcon";
import Button from "../UI/Button";
import MenuIcon from "./../../assets/icons/MenuIkon";
import SearchIcon from "./../../assets/icons/SearchIcon";
import UserIcon from "./../../assets/icons/UserIcon";
import HeartIcon from "./../../assets/icons/HeartIcon";
import CartIcon from "./../../assets/icons/CartIcon";
import { MyDialog } from "../Modal/Modal";
import { MyModal } from "../Modal/ModalAuth";
import { loadState } from "../../Config/storage";
import productReducer from "./../../Redux/Reducers/product-reducer";
import { useSelector } from "react-redux";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const { count } = useSelector((state) => state.productReducer);
  const navigate = useNavigate();
  console.log(count);

  const token = loadState("user");

  const handleModal = () => {
    setIsOpen(true);
  };

  const authModal = () => {
    setIsModal(true);
  };

  const cartNavigate = () => {
    navigate("/cart");
  };

  return (
    <div className="container">
      <ul className="flex items-center justify-end gap-6 py-[10px]">
        <li>
          <NavLink
            to="/delivery-payment"
            className="text-base hover:text-primary"
          >
            Доставка и оплата
          </NavLink>
        </li>
        <li>
          <NavLink to="/pickup-points" className="text-base hover:text-primary">
            Пункты выдачи
          </NavLink>
        </li>
        <li>
          <NavLink to="/support" className="text-base hover:text-primary">
            Поддержка
          </NavLink>
        </li>
        <li>
          <a
            href="tel:+998902537753"
            className="text-base flex items-center gap-5 hover:text-primary"
          >
            <PhoneIcon /> +998 90 253 77 53
          </a>
        </li>
      </ul>
      <div className="flex gap-8 items-center py-[18px]">
        <Link to="/">
          <LogoIcon />
        </Link>
        <Button
          className="flex items-center gap-4"
          variant="primary"
          onClick={handleModal}
        >
          <MenuIcon /> Каталог
        </Button>
        <div className="py-[12px] px-4 border-2 flex items-center justify-between w-full">
          <input
            type="text"
            placeholder="Поиск"
            className="w-full outline-none"
          />
          <SearchIcon />
        </div>
        <ul className="flex gap-8 items-center">
          <li>
            {token ? (
              <button className="flex flex-col items-center">
                <UserIcon /> Профиль
              </button>
            ) : (
              <button
                className="flex flex-col items-center"
                onClick={authModal}
              >
                <UserIcon /> Войти
              </button>
            )}
          </li>
          <li>
            <button className="flex flex-col items-center">
              <HeartIcon /> Избранное
            </button>
          </li>
          <li className="relative">
            <button
              className="flex flex-col items-center"
              onClick={cartNavigate}
            >
              <CartIcon /> Корзина
            </button>
            <span className="px-2 bg-red-600 text-white flex items-center justify-center rounded-full absolute top-[-20px] right-0">
              {count}
            </span>
          </li>
        </ul>
      </div>
      <MyDialog isOpen={isOpen} setIsOpen={setIsOpen} />
      <MyModal isModal={isModal} setIsModal={setIsModal} />
    </div>
  );
};

export default Header;
