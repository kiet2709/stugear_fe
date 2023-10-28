import "./WishlistItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan } from "@fortawesome/free-regular-svg-icons";
import { Link } from "react-router-dom";
const WishlistItem =({item}) =>{
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
                <Link to={`/home-page/product-detail/${item.id}`}>{item.title}</Link>
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
            <Link>
              <FontAwesomeIcon icon={faTrashCan} size="2x"/>
            </Link>
          </div>
        </td>
      </tr>
    )
}
export default WishlistItem