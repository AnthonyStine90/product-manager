import axios from "axios";
import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";

function Products() {
  const [products, setProducts] = useState([]);
  const [load, setLoad] = useState(false);
  // load/setLoad "boolean flipper"

  useEffect(() => {
    axios
      .get("http://localhost:5001/api/products")
      .then((res) => {
        setProducts(res.data);
        setLoad(!load)
      })
      .catch((err) => console.log(err));
  }, [load]);

  return (
    <div>
      <Outlet context={{ products, load, setLoad }} />
    </div>
  );
}

export default Products;
