import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
// import Home from "./pages/Home/Home";
// import Cart from "./pages/Cart/Cart";
// import Products from "./pages/Products/Products";
// import SingleProduct from "./pages/Products/SingleProduct";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
// import Wishlist from "./pages/Wishlist/Wishlist";
// import Checkout from "./pages/Checkout/Checkout";
// import Profile from "./pages/Profile/Profile";
import { Suspense, lazy } from "react";
import NotFound from "./pages/NotFound/NotFound";

const Home = lazy(() => import("./pages/Home/Home"));
const Products = lazy(() => import("./pages/Products/Products"));
const Cart = lazy(() => import("./pages/Cart/Cart"));
const SingleProduct = lazy(() => import("./pages/Products/SingleProduct"));
const Wishlist = lazy(() => import("./pages/Wishlist/Wishlist"));
const Checkout = lazy(() => import("./pages/Checkout/Checkout"));
const Profile = lazy(() => import("./pages/Profile/Profile"));

function App() {
  return (
    <>
      <ToastContainer />
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route
            index
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Home />
              </Suspense>
            }
          />
          <Route
            path="category/:datakey"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Products />
              </Suspense>
            }
          />
          <Route
            path="products/:id"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <SingleProduct />
              </Suspense>
            }
          />
          <Route
            path="cart"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Cart />
              </Suspense>
            }
          />
          <Route
            path="checkout"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Checkout />
              </Suspense>
            }
          />
          <Route
            path="profile"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Profile />
              </Suspense>
            }
          />
          <Route
            path="wishlist"
            element={
              <Suspense fallback={<h2>Loading ...</h2>}>
                <Wishlist />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
