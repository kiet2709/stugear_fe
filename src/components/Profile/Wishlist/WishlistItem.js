import "./WishlistItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
import UserService from "../../../service/UserService";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from "react";

const WishlistItem =({item}) =>{

  const [isRemoved, setRemoved] = useState(false)

  const handleRemoveItem = async () => {
    const response = await UserService.removeCurrentUserWishListByProductId(item.id)
    
    console.log(response)
    if(response?.status === 500){
      console.log("Something went wrong")
    }
    else{
      setRemoved(true)
      toast.success('Xóa sản phẩm thành công!', {
        position: "top-center",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        });
    }
  }

    return (
        <tr>
        <td>
          <div className="product-item d-flex ">
            <Link className="product-thumb" to={`/home-page/product-detail/${item.id}`}>
              <img
                className="large-image"
                src={item.product_image}
                alt="Product"
              />
            </Link>
            <div className="product-info my-auto ms-4">
              <h4 className="product-title py-2">
                <Link to={`/home-page/product-detail/${item.id}`}>{item.name}</Link>
              </h4>
              <div className="text-lg text-medium text-muted py-2">
                {item.price}
              </div>
              <div>
                Tình trạng:
                <div className="d-inline text-success py-2">
                  {" "}
                  {item.status}
                </div>
              </div>
            </div>
          </div>
        </td>
        <td>
          <div className="mt-5">
            <Link style={{textDecoration: 'None'}} onClick={() => handleRemoveItem()}>
              <FontAwesomeIcon icon={faTrashCan} size="2x"/>
            </Link>
            {isRemoved && (
              <ToastContainer
              position="top-center"
              autoClose={1000}
              hideProgressBar={false}
              newestOnTop={false}
              closeOnClick
              rtl={false}
              pauseOnFocusLoss
              draggable
              pauseOnHover
              theme="light"
              />
            )}
          </div>
        </td>
      </tr>
    )
}
export default WishlistItem