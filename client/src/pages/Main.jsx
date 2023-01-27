import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import Products from "../components/Products";
import AllProducts from "../components/AllProducts";
import NewProduct from "../components/NewProduct"
import OneProduct from "../components/OneProduct";
import EditProduct from "../components/EditProduct";

function Main() {
  return (
    <div>
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Navigate to="/products" />} />
          <Route path="/products" element={<Products />}>
            <Route index element={<AllProducts />} />
            <Route path="new" element={<NewProduct />} />
            <Route path=':id' element={<OneProduct />} />
            <Route path=':id/edit' element={<EditProduct />} />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default Main;
