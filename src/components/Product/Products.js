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
import Product from "./Product";
  const Products = ({category}) => {
    const products = [
      {
        id: 1,
        image: "assets/images/book-thumbnail.jpg",
        title: "Lorem ipsum dolor sit amet, consectetur",
        chatCount: 5,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Fiction", color: "bg-danger" },
          { name: "Bestseller", color: "bg-success" },
          { name: "Mystery", color: "bg-warning" },
        ],
        price: "120,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 2,
        image: "assets/images/book-thumbnail.jpg",
        title: "Ut enim ad minim veniam",
        chatCount: 3,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Non-fiction", color: "bg-info" },
          { name: "Self-help", color: "bg-primary" },
        ],
        price: "150,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 3,
        image: "assets/images/book-thumbnail.jpg",
        title: "Aenean commodo ligula eget dolor",
        chatCount: 2,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Fiction", color: "bg-danger" },
          { name: "Classic", color: "bg-secondary" },
        ],
        price: "140,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 4,
        image: "assets/images/book-thumbnail.jpg",
        title: "Curabitur blandit tempus porttitor",
        chatCount: 7,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Non-fiction", color: "bg-info" },
          { name: "Bestseller", color: "bg-success" },
        ],
        price: "160,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 5,
        image: "assets/images/book-thumbnail.jpg",
        title: "Donec quam felis, ultricies",
        chatCount: 4,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Mystery", color: "bg-warning" },
          { name: "Thriller", color: "bg-dark" },
        ],
        price: "180,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 6,
        image: "assets/images/book-thumbnail.jpg",
        title: "Integer tincidunt",
        chatCount: 6,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Self-help", color: "bg-primary" },
          { name: "Motivation", color: "bg-info" },
        ],
        price: "200,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 7,
        image: "assets/images/book-thumbnail.jpg",
        title: "Nunc nec urna eget quam",
        chatCount: 9,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Fiction", color: "bg-danger" },
          { name: "Drama", color: "bg-warning" },
        ],
        price: "220,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 8,
        image: "assets/images/book-thumbnail.jpg",
        title: "Pellentesque habitant morbi tristique",
        chatCount: 1,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Non-fiction", color: "bg-info" },
          { name: "History", color: "bg-secondary" },
        ],
        price: "240,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 9,
        image: "assets/images/book-thumbnail.jpg",
        title: "Quisque rutrum.",
        chatCount: 8,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Science", color: "bg-success" },
          { name: "Technology", color: "bg-primary" },
        ],
        price: "260,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
      {
        id: 10,
        image: "assets/images/book-thumbnail.jpg",
        title: "Sed aliquam ultrices mauris.",
        chatCount: 3,
        lastUpdated: "Aug 7",
        tags: [
          { name: "Mystery", color: "bg-warning" },
          { name: "Crime", color: "bg-dark" },
        ],
        price: "280,000 VNĐ",
        avatar: "assets/images/contributor.jpg",
      },
    ];
  
    const productsPerPage = 3;
    const [currentPage, setCurrentPage] = useState(1);
  
    const indexOfLastProduct = currentPage * productsPerPage;
    const indexOfFirstProduct = indexOfLastProduct - productsPerPage;
    const currentProducts = products.slice(
      indexOfFirstProduct,
      indexOfLastProduct
    );
  
    const paginate = (pageNumber) => {
      setCurrentPage(pageNumber);
    };
  
    return (
      <div>
        <table className="table table-borderless table-striped table-hover">
          <tbody>
            {currentProducts.map((product, index) => (
              <Product key={index} product={product}/>
            ))}
          </tbody>
        </table>
        <nav className="d-flex justify-content-center mt-3">
    <ul className="pagination">
      <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
        <button
          onClick={() => paginate(currentPage - 1)}
          className="page-link"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </button>
      </li>
      {Array(Math.ceil(products.length / productsPerPage))
        .fill()
        .map((_, i) => (
          <li
            key={i}
            className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
          >
            <button onClick={() => paginate(i + 1)} className="page-link">
              {i + 1}
            </button>
          </li>
        ))}
      <li className={`page-item ${currentPage === Math.ceil(products.length / productsPerPage) ? "disabled" : ""}`}>
        <button
          onClick={() => paginate(currentPage + 1)}
          className="page-link"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </button>
      </li>
    </ul>
  </nav>
          
  
      </div>
    );
  };
  export default Products;
  