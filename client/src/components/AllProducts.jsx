import { Link, useOutletContext } from "react-router-dom";

function AllProducts() {
  const { products } = useOutletContext();

    return (
      <table className="table">
        <thead>
          <tr>
            <th>Title:</th>
            <th>Price:</th>
            <th>Description:</th>
          </tr>
        </thead>
        <tbody>
          {products &&
            products.map((product) => {
              return (
                <tr key={product._id}>
                  <td>
                    <Link to={`/products/${product._id}`}>{product.title}</Link>
                  </td>
                  <td>{`$ ${product.price}`}</td>
                  <td>{product.description}</td>
                </tr>
              );
            })}
        </tbody>
      </table>
    );
  }
  

export default AllProducts;

