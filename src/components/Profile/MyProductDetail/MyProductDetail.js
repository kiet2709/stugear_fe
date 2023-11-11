import { useEffect, useState } from "react";
import ProductService from "../../../service/ProductService";
import "./MyProductDetail.css";
import { Link, useNavigate } from "react-router-dom";
import ProductDetail from "../../Product/ProductDetail/ProductDetail";
import { useParams } from "react-router-dom";
import Loading from "../../Loading";
import ChatSection from "../../ChatSection/ChatSection";
import Feedback from "../../FeedBack/Feedback";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
const MyProductDetail = () => {
  const navigate = useNavigate();
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  let { slug } = useParams();
  const getProductById = async (id) => {
    const response = await ProductService.getProductById(id);
    if (response?.status === 404) {
      navigate("/not-found");
    }
    setProduct(response);
  };

  useEffect(() => {
    setLoading(true);
    getProductById(slug);
    setLoading(false);
  }, [slug]);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <div className="row my-5">
          <div
            className="product-status mb-5 rounded-xl1"
            style={{
              backgroundColor: "#F59E0B",
            }}
          >
            <div className="d-flex mb-3">
              <span
                className="ping my-2 me-2"
                style={{ border: "4px solid #10B981" }}
              ></span>
              <span>{product.status}</span>
            </div>
            <h4>Sản phẩm của bạn đang chờ được duyệt.</h4>
            <p>Chúng tôi sẽ cho bạn biết khi sản phẩm đã được duyệt</p>
          </div>

          <div className="row">
            <div className="col-8">
              <ProductDetail product={product} isMember={true} />
              <div>
                <Feedback productId={product.id} />
              </div>
            </div>
            <div className="col-4">
              <ChatSection product={product} />
              <div className="mt-4 text-center product-modify">
                <div className=" product-edit mb-3">
                <Link style={{textDecoration: 'None', color: 'black'}}>
                  
                  <h5> <FontAwesomeIcon icon={faPencil} className="me-2" /> Chỉnh sửa</h5>
                </Link>
                </div>
                <div className=" product-remove">

                <Link  style={{textDecoration: 'None', color: 'black'}}>
                  <h5> 
                  <FontAwesomeIcon icon={faTrash}  className="me-2" /> Xóa sản phẩm</h5>
                </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default MyProductDetail;
