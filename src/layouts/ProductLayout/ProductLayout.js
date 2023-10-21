import { Outlet } from "react-router";

import "./ProductLayout.css";
import { Container } from "react-bootstrap";
import SideBar from "../../components/SideBar/SideBar";

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header"
const ProductLayout = () => {
  const categories = [
    {
      id: 1,
      name: "Tài liệu",
    },
    {
      id: 2,
      name: "Dụng cụ",
    },
    {
      id: 3,
      name: "Khác",
    },
  ];

  return (
    <>
      <Header sticky={false}/>

      <Container>
      
        
        <div className="row">
          <div className="col-2 ">
            <SideBar categories={categories} />
          </div>
          <div className="col content">
            <Outlet />
          </div>
        </div>
      </Container>
      <Footer/>
    </>
  );
};
export default ProductLayout;
