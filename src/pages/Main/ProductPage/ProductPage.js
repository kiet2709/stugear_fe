import ChatSection from "../../../components/ChatSection/ChatSection";
import Feedback from "../../../components/FeedBack/Feedback";
import ProductDetail from "../../../components/Product/ProductDetail/ProductDetail";
import RelateProduct from "../../../components/RelateProduct/RelateProduct";

const ProductPage = () => {
  const product = {
    name: "Tên tài liệu",
    owner: "Kiệt",
    description:
      "Highlighting throughout. Postage will be quoted on purchase and is not included in the price.",
    price: "12,000 VNĐ",
    quantity: "3",
    condition: "Tốt",
    lastUpdated: "20th October, 2023",
    transactionMethods: ["Tự do", "Trên trang web", "Tùy chọn"],
  };

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
  ];
  return (
    <div>
      <h1 id="product-title">Tiêu đề sản phẩm</h1>

      <hr className="bg-dark my-4"></hr>
      <div className="row">
        <div className="col-8">
          <ProductDetail product={product} />
          <div>
            <Feedback/>
          </div>
        </div>
        <div className="col-4">
          <ChatSection product={product} />
          <div className="mt-4">
            <RelateProduct products={products} />
          </div>
        </div>
      </div>
    </div>
  );
};
export default ProductPage;
