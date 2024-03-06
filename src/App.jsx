import { Route, Routes } from "react-router-dom";
import MainLayout from "./MainLayout/MainLayout";
import Home from "./pages/Home/Home";
import Products from "./pages/Products/Products";
import SingleProduct from "./pages/Products/SingleProduct";

function App() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path="products" element={<Products />} />
        <Route path="products/:id" element={<SingleProduct />} />
      </Route>
    </Routes>
  );
}

export default App;
