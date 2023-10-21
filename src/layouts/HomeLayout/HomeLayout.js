import { Outlet } from "react-router";

import "./HomeLayout.css";
import { Container } from "react-bootstrap";
import ForumTitle from "../../components/Home/ForumTitle/ForumTitle";
import SideBar from "../../components/SideBar/SideBar";

import Footer from "../../components/Footer/Footer"
import Header from "../../components/Header"
const HomeLayout = () => {
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
        <ForumTitle />
        
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
export default HomeLayout;
