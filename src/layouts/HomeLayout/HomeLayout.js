import { Outlet } from "react-router";

import "./HomeLayout.css";
import { Container } from "react-bootstrap";
import ForumTitle from "../../components/Home/ForumTitle/ForumTitle";
import SideBar from "../../components/SideBar/SideBar";

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
      <Container>
        <ForumTitle />
        <div className="row">
          <div className="col-2">
            <SideBar categories={categories} />
          </div>
          <div className="col">
            <Outlet />
          </div>
        </div>
      </Container>
    </>
  );
};
export default HomeLayout;
