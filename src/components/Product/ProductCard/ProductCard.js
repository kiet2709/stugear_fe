import {
  faFacebookF,
  faGoogle,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faMessage } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import "./ProductCard.css";
import { Link } from "react-router-dom";
import ProductService from "../../../service/ProductService";
const ProductCard = ({ product }) => {


  return (
    <>
      <div className="container text-start" style={{ marginTop: 50 }}>
        <div class="card-sl">
          <Link
            style={{
              textDecoration: "none",
              backgroundColor:
              product.status === "Nháp" ? "#FFFBEB" : "#ECFDF5",
              color: product.status === "Nháp" ? "#F59E0B" : "#10B981",
            }}
            className="card-button"
          >
            <div className="d-flex">
              <span className="ping mt-2 me-2" style={{border: product.status === "Nháp" ? "4px solid #F59E0B" : "4px solid #10B981"}}></span>
              <span>{product.status}</span>
            </div>
          </Link>
          <div class="card-image">
            <img src={product.product_image} alt={"/assets/images/book-thumbnail.jpg"} className="card-image-full"/>
          </div>

          <div class="card-heading">
            {product.title === "" ? "Tiêu đề" : product.title}
          </div>
          <div class="card-text">
            {product.description === "" ? "miêu tả" : product.description}
          </div>
          <div class="card-text">{product.price}</div>
        </div>
      </div>
    </>
  );
};

export default ProductCard;
