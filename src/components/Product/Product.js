import {
  faSearch,
  faBookmark,
  faMessage,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Button, InputGroup } from "react-bootstrap";
import { useState } from "react";
import "./Products.css";
import { Link } from "react-router-dom";
const Product = ({product}) => {
  return (
    <tr key={product.id}>
      <td className="align-middle">
        <Link to="/product-detail" style={{ textDecoration: "none", color: "black" }}>
    
          <img src={product.image} alt="" className="small-image  " />
          <span>{product.title}</span>
        </Link>
      </td>
      <td className="align-middle">
        <div className="tag-container ">
          {product.tags.map((tag, index) => (
            <button
              key={index}
              className={`btn btn-outline tag badge ${tag.color}`}
            >
              {tag.name}
            </button>
          ))}
        </div>
      </td>
      <td className="align-middle">
        <Link style={{ textDecoration: "none" }} className="badge bg-primary ">
          <FontAwesomeIcon icon={faMessage} /> {product.chatCount}
        </Link>
      </td>
      <td className="align-middle">
        <p className="m-0">{product.price}</p>
      </td>
      <td className="align-middle">
        <Link>
          {" "}
          <img className="small-image rounded" src={product.avatar} alt="" />
        </Link>
      </td>
      <td className="align-middle">
        <span>{product.lastUpdated}, 2023</span>
      </td>
    </tr>
  );
};

export default Product;
