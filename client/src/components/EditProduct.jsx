import axios from "axios";
import { useState, useEffect } from "react";
import { useOutletContext, useNavigate, useParams } from "react-router-dom";

const blankProduct = {
  title: "",
  price: "",
  description: "",
};

function EditProduct() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { load, setLoad } = useOutletContext();
  const [newProduct, setNewProduct] = useState(blankProduct);
  const [errors, setErrors] = useState(null);

  useEffect(() => {
    axios
      .put(`http://localhost:5001/api/products/${id}`)
      .then(res => setNewProduct(res.data))
      .catch(err => console.log(err));
  }, [id])
  

  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .put(`http://localhost:5001/api/products/${id}`, newProduct)
      .then((res) => {
        console.log(res.data);
        setLoad(!load);
        setErrors(null);
        navigate(`/products/${id}`);
      })
      .catch((err) => {
        console.log(err);
        setErrors(err.response.data.errors);
        //setting errors, if success set back to null
      });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

  return (
    <div className="container">
      <div className="card">
        <div className="card-body">
          {newProduct &&
            <form onSubmit={handlesubmit}>
            <div className="d-flex justify-content-center">
              <h1 className="mb-3">Edit Product</h1>
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text" id="inputGroup-sizing-default">
                Title
              </span>
              <input
                type="text"
                name="title"
                className="form-control"
                value={newProduct.title}
                onChange={handleChange}
              />
              {
                errors?.title && (
                  <span className="form-test text-danger">
                    {errors.title.message}
                  </span>
                //optional chaining- hotwire
                )
              }
            </div>
            <div className="input-group mb-3">
              <span className="input-group-text">$</span>
              <span className="input-group-text">0.00</span>
              <input
                type="text"
                name="price"
                className="form-control"
                value={newProduct.price}
                onChange={handleChange}
              />
              {
                errors?.price && (
                  <span className="form-test text-danger">
                    {errors.price.message}
                  </span>
                //optional chaining- hotwire
                )
              }
              <div className="input-group mt-3">
                <span className="input-group-text">Description</span>
                <textarea
                  name="description"
                  className="form-control"
                  value={newProduct.description}
                  onChange={handleChange}
                ></textarea>
                {
                errors?.description && (
                  <span className="form-test text-danger">
                    {errors.description.message}
                  </span>
                //optional chaining- hotwire
                )
              }
              </div>
              <div className="d-flex justify-content-end mt-3">
                <button className="btn btn-primary" type="submit">
                  Update
                </button>
              </div>
            </div>
          </form>}
        </div>
      </div>
    </div>
  );
}

export default EditProduct;
