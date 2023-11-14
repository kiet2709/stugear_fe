import "./ProductCard.css";
import { Link } from "react-router-dom";
const ProductCard = ({ product }) => {
  return (
    <>
      <div className="container text-start product-card">
        <Link  style={{textDecoration: 'None'}} to={`/home-page/product-detail/${product.id}`}>
        <div class="card-sl">
          <Link
            style={{
              textDecoration: "none",
              backgroundColor:
                product.status === "Chờ duyệt"
                  ? "#FFFBEB"
                  : product.status === "Nháp"
                  ? "#dcf1f7"
                  : "#ECFDF5",
              color:
                product.status === "Chờ duyệt"
                  ? "#F59E0B"
                  : product.status === "Nháp"
                  ? "#155CA2"
                  : "#10B981",
            }}
            className="card-button"
          >
            <div className="d-flex">
              <span
                className="ping mt-2 me-2"
                style={{
                  border:
                    product.status === "Chờ duyệt"
                      ? "4px solid #F59E0B"
                      : product.status === "Nháp"
                      ? "4px solid  #155CA2"
                      : "4px solid #10B981",
                }}
              ></span>
              <span>
                {product.status === "Đã duyệt"
                  ? "Đang bán"
                  : product.status === "Đã bán"
                  ? "Chờ thanh toán"
                  : product.status}
              </span>
            </div>
          </Link>
          <div class="card-image">
            <img
              src={product.product_image}
              alt={"/assets/images/book-thumbnail.jpg"}
              className="card-image-full"
            />
          </div>

          <div class="card-heading">
            {product.title === "" ? "Tiêu đề" : product.title}
          </div>
          <div class="card-text">
            {product.description === ""
              ? "miêu tả"
              : product?.description?.slice(0, 30)}
          </div>
          <div class="card-text">{product.price}</div>
        </div>
        
        </Link>
   
      </div>
    </>
  );
};

export default ProductCard;
