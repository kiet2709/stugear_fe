import "./RelateProduct.css";
import { Link } from "react-router-dom";
const RelateProduct = ({ products }) => {
  return (
    <div className="card relate-product  ">
      <div className="card-header relate-product-header text-white">
        Bài đăng liên quan
      </div>
      <div className="card-body relate-product-body">
        {products.length === 0 ? (
          <>
            <p className="text-center">Không có sản phẩm nào</p>
          </>
        ) : (
          <>
            {" "}
            {products.map((product, index) => (
              <>
                <Link
                  to={`/home-page/product-detail/${product.id}`}
                  key={index}
                  style={{ textDecoration: "none", color: "#7355F7" }}
                >
                  <div className="relate-product-item ">
                    <img
                      src="/assets/images/book-thumbnail.jpg"
                      className="small-image"
                      alt=""
                    />
                    {product.title}
                    <p className="relate-price mt-2">Giá: {product.price}</p>
                  </div>
                </Link>
                <div key={index} className="tag-container ">
                  {product.tags.map((tag, index) => (
                    <button
                      key={index}
                      className={`btn btn-outline tag badge ${tag.color}`}
                    >
                      {tag.name}
                    </button>
                  ))}
                </div>
                <hr className="bg-dark"></hr>
              </>
            ))}
          </>
        )}
      </div>
    </div>
  );
};

export default RelateProduct;
