import ChatSection from "../../../components/ChatSection/ChatSection";
import Feedback from "../../../components/FeedBack/Feedback";
import ProductDetail from "../../../components/Product/ProductDetail/ProductDetail";
import RelateProduct from "../../../components/RelateProduct/RelateProduct";
import "./ProductPage.css";
import { useParams } from "react-router";
import ProductService from "../../../service/ProductService";
import { useState } from "react";
import { useEffect } from "react";
import Loading from "../../../components/Loading";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil, faTrash } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
const ProductPage = () => {
  const [product, setProduct] = useState({});
  const [isLoading, setLoading] = useState(true);
  const [isOwner, setOwner] = useState(false);
  let { slug } = useParams();
  const navigate = useNavigate()
  const getProductById = async (id) => {
    setLoading(true);
    const response = await ProductService.getProductById(id);
    console.log(response)
    if(response?.status === 404){
      navigate("/not-found")
    }
    if (response?.status === 500) {
      console.log("ProductDetail: Something went wrong");
    } else {
      const userId = localStorage.getItem("user_id");
          if((response?.status === "Chờ duyệt") && response?.owner_id != userId) {
      navigate("/not-found")
  }
      if (userId == response?.owner_id) {
        setOwner(true);
      }
      setProduct(response);
    }
    setLoading(false);
  };

  useEffect(() => {

    getProductById(slug);

  }, [slug]);

  const handleDelete = async () => {
    const response = await ProductService.deleteProduct(product?.id)
    console.log(response)
    navigate("/home-page/category/all")
    
  }
  const products = [
    {
      id: 1,
      title: "Lorem ipsum dolor sit amet, consec adipiscing elit",
      price: "20,000 VNĐ",
      tags: [
        { name: "Mystery", color: "bg-warning" },
        { name: "Crime", color: "bg-dark" },
      ],
    },
    {
      id: 2,
      title: "Excepteur sint occaecat cupidatat",
      price: "30,000 VNĐ",
      tags: [
        { name: "Science", color: "bg-success" },
        { name: "Technology", color: "bg-primary" },
      ],
    },
    {
      id: 3,
      title: "Amet minim mollit non deserunt ullamco",
      price: "25,000 VNĐ",
      tags: [
        { name: "Fiction", color: "bg-danger" },
        { name: "Adventure", color: "bg-info" },
      ],
    },
    {
      id: 4,
      title: "Quis nostrud exercitation ullamco laboris",
      price: "35,000 VNĐ",
      tags: [
        { name: "History", color: "bg-secondary" },
        { name: "Biography", color: "bg-light" },
      ],
    },
    {
      id: 5,
      title: "Nisi ut aliquip ex ea commodo consequat",
      price: "28,000 VNĐ",
      tags: [
        { name: "Self-help", color: "bg-primary" },
        { name: "Motivation", color: "bg-info" },
      ],
    },
    {
      id: 6,
      title: "Voluptate velit esse cillum dolore eu fugiat nulla pariatur",
      price: "40,000 VNĐ",
      tags: [
        { name: "Fantasy", color: "bg-success" },
        { name: "Magic", color: "bg-warning" },
      ],
    },
    {
      id: 7,
      title: "Duis aute irure dolor in reprehenderit",
      price: "22,000 VNĐ",
      tags: [
        { name: "Romance", color: "bg-danger" },
        { name: "Love", color: "bg-light" },
      ],
    },
    {
      id: 8,
      title: "Ut enim ad minim veniam, quis nostrud exercitation ullamco",
      price: "33,000 VNĐ",
      tags: [
        { name: "Philosophy", color: "bg-primary" },
        { name: "Wisdom", color: "bg-secondary" },
      ],
    },
  ];
  return (
    <div>
      {isLoading ? (
        <Loading />
      ) : (
        <>
        {isOwner === true && product?.status !== "Đã duyệt" ? (
          <>
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

          </>
        ) : (
          <></>
        )}
          <h1 id="product-title">{product.title}</h1>

          <hr className="bg-dark my-4"></hr>
          <div className="row">
            <div className="col-8">
              <ProductDetail product={product} />
              <div>

                  <Feedback productId={product.id} />
            
              </div>
            </div>
            <div className="col-4">
            {isOwner === true ? (
                  <>
                    <div className="mt-4 text-center product-modify">
                      <div className=" product-edit mb-3">
                        <Link
                          style={{ textDecoration: "None", color: "black" }}
                          
                          to={`/member/upload/${slug}`}
                        >
                          <h5>
                            {" "}
                            <FontAwesomeIcon
                              icon={faPencil}
                              className="me-2"
                            />{" "}
                            Chỉnh sửa
                          </h5>
                        </Link>
                      </div>
                      <div className=" product-remove">
                        <Link
                          style={{ textDecoration: "None", color: "black" }}
                          onClick={(e) => handleDelete(e)}
                        >
                          <h5>
                            <FontAwesomeIcon icon={faTrash} className="me-2" />{" "}
                            Xóa sản phẩm
                          </h5>
                        </Link>
                      </div>
                    </div>
                  </>
                ) : (

                  <ChatSection product={product} />
                )}
              <div className="mt-4">
                <RelateProduct products={products} />
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};
export default ProductPage;
