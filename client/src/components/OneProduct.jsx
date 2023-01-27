import axios from "axios";
import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

function OneProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    axios
      .get(`http://localhost:5001/api/products/${id}`)
      .then((res) => setProduct(res.data))
      .catch((err) => console.log(err));
  }, [id]);

  const handleDelete = (id) => {
    axios
      .delete(`http://localhost:5001/api/products/${id}`)
      .then((res) => {
        console.log(res.data);
        navigate("/products");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h1>Product Details</h1>
      <div className="card">
        {product && (
          <div className="card-body">
            <h2>{product.title}</h2>
            <h2>Price: {product.price}</h2>
            <h2>Description: {product.description}</h2>
            <div>
              <Link
                to={`/products/${id}/edit`}
                className="btn btn-warning me-2"
              >
                Edit
              </Link>
              <button
                onClick={() => handleDelete(product._id)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default OneProduct;
