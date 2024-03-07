import Button from "../UI/Button";
import CartIcon from "./../../assets/icons/CartIcon";

const MainCard = (props) => {
  return (
    <div className="p-2 flex gap-4 justify-around items-center flex-col w-[214px] h-[323px] border shadow-lg mb-4 rounded-lg">
      <div className="flex items-center justify-center">
        <img className="w-[165px] h-[165px]" src={props.img} alt="" />
      </div>
      <div className="flex flex-col justify-between">
        <h1 className="text-base">{props.title}</h1>
        <div className="flex gap-3 items-center justify-between">
          <span className="text-lg font-semibold">{props.price} Сум</span>
          <Button
            variant="primary"
            className="flex items-center justify-center"
          >
            <CartIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default MainCard;
