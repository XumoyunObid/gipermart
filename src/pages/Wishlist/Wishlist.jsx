import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import wishlistReducer from "./../../Redux/Reducers/wishlist-reducer";
import Button from "../../Components/UI/Button";
import MainCard from "../../Components/Cards/MainCard";

const Wishlist = () => {
  const { wishlistProducts } = useSelector((state) => state.wishlistReducer);
  const navigate = useNavigate();
  console.log(wishlistProducts);

  const toHome = () => {
    navigate("/");
  };

  return (
    <div className="container py-6">
      {!wishlistProducts.length ? (
        <div className="flex flex-col items-center gap-3">
          <span>
            <i className="fa-solid fa-cart-arrow-down text-5xl text-primary"></i>
          </span>
          <h1 className="text-4xl font-semibold">Избранные пуста</h1>
          <p>Но вы всегда можете ее наполнить</p>
          <Button variant="primary" onClick={toHome}>
            На главную
          </Button>
        </div>
      ) : (
        <div>
          <h1 className="text-lg font-semibold py-4">Избранные товары</h1>
          <div className="flex items-start justify-between">
            <div className="w-full flex gap-3 flex-wrap">
              {wishlistProducts?.map((item) => (
                <MainCard key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
