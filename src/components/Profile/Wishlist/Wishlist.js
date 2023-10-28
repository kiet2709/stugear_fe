import { Link } from "react-router-dom";
import "./Wishlist.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import WishlistItem from "./WishlistItem";

const Wishlist = () => {

  const wishlists = [
    {
        id: 1,
        title: "Tôi thấy hoa vàng trên cỏ xanh",
        product_image: "/assets/images/book-thumbnail.jpg",
        price: "30,000 VNĐ",
        status: "Còn hàng",
    },
    {
        id: 2,
        title: "Mắc biết",
        product_image: "/assets/images/book-thumbnail.jpg",
        price: "45,000 VNĐ",
        status: "Còn hàng",
    },
    {
        id: 3,
        title: "Tây Du ký",
        product_image: "/assets/images/book-thumbnail.jpg",
        price: "60,000 VNĐ",
        status: "Còn hàng",
    }
  ]

  return (
    <>
      <div>
        <div className="table-responsive wishlist-table margin-bottom-none">
          <table className="table">
            <tbody>
                {wishlists.map(item => (

                    <WishlistItem key={item.id} item={item}/>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Wishlist;
