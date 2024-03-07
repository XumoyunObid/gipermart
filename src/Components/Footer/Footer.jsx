import React from "react";
import LogoIcon from "./../../assets/icons/LogoIcon";
import PayMeIcon from "./../../assets/icons/PayMeIcon";
import UzcardIcon from "./../../assets/icons/UzcardIcon";
import HumoIcon from "./../../assets/icons/HumoIcon";

const Footer = () => {
  return (
    <>
      <div className="bg-neutral mt-[105px] py-[40px]">
        <div className="container flex justify-between">
          <ul className="flex flex-col gap-4 items-start">
            <li>
              <LogoIcon />
            </li>
            <li>
              <p className="text-lg font-semibold">+99 893 374-66-44</p>
              <span>справочная служба</span>
            </li>
            <li>
              <p className="text-lg font-semibold">+99 893 374-66-44</p>
              <span>справочная служба</span>
            </li>
            <li>
              <p className="font-semibold">Оставайтесь на связи</p>
              <ul className="flex gap-4 items-center">
                <li className="w-8 h-8 bg-[#E44542] flex items-center justify-center text-white text-2xl">
                  <i className="fa-brands fa-facebook-f"></i>
                </li>
                <li className="w-8 h-8 bg-[#E44542] flex items-center justify-center text-white text-2xl">
                  <i className="fa-brands fa-odnoklassniki"></i>
                </li>
                <li className="w-8 h-8 bg-[#E44542] flex items-center justify-center text-white text-2xl">
                  <i className="fa-brands fa-vk"></i>
                </li>
                <li className="w-8 h-8 bg-[#E44542] flex items-center justify-center text-white text-2xl">
                  <i className="fa-brands fa-youtube"></i>
                </li>
                <li className="w-8 h-8 bg-[#E44542] flex items-center justify-center text-white text-2xl">
                  <i className="fa-brands fa-instagram"></i>
                </li>
              </ul>
            </li>
          </ul>
          <ul className="flex flex-col gap-4 items-start">
            <li>Условия обмена и возврата</li>
            <li>Каталог</li>
            <li>О компании</li>
            <li>Контакты</li>
            <li>Доставка</li>
            <li>Оплата</li>
          </ul>
          <ul className="flex flex-col gap-4 items-start">
            <li>Клиентам</li>
            <li>Личный кабинет</li>
            <li>Блог</li>
            <li>Обратная связь</li>
          </ul>
          <ul className="flex flex-col gap-4 items-start">
            <li>Информация</li>
            <li>Пользовательское соглашение</li>
            <li>Политика конфиденциальности и оферта</li>
          </ul>
        </div>
      </div>
      <div className="bg-[#EAEAEA]">
        <div className="flex justify-between items-center container py-6">
          <h1>
            © 2022 Любое использование контента без письменного разрешения
            запрещено
          </h1>
          <div className="flex items-center gap-6">
            <PayMeIcon />
            <UzcardIcon />
            <HumoIcon />
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
