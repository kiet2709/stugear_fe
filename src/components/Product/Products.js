import { useEffect, useState } from "react";
import "./Products.css";
import Product from "./Product";
import ProductService from "../../service/ProductService";

import Loading from "../../components/Loading";

const Products = ({ category }) => {
  const [products, setProducts] = useState([{}]);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    const getProducts = async () => {
      const response = await ProductService.getProductsByCategoryId(
        category.id
      );
      if (response?.status === 500) {
        console.log("Products: Something went wrong");
      } else {
        setProducts(response);
      }
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <div>
      <table className="table table-borderless table-striped table-hover">
        <tbody>
          <>
            {isLoading ? (
              <Loading />
            ) : (
              <>
                {products.map((product, index) => (
                  <Product key={index} product={product} />
                ))}
              </>
            )}
          </>
        </tbody>
      </table>
    </div>
  );
};
export default Products;
