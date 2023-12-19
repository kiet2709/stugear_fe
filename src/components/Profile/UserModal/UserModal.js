import { useEffect, useState } from "react";
import "./UserModal.css";
import UserService from "../../../service/UserService";
import Modal from "react-modal";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAddressCard,
  faEnvelope,
  faFlag,
  faGlobe,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";

import AskService from "../../../service/AskService";
const UserModal = ({ userId }) => {
  const [user, setUser] = useState([]);
  const [reportContent, setReportContent] = useState("");
  const [reportShow, setReportShow] = useState();
  const [reportMessage, setReportMessage] = useState("");
  const handleChange = (e) => {
    setReportContent(e.target.value);
  };
  const getUserById = async (id) => {
    const response = await UserService.getUserById(id);
    console.log(response);
    if (response?.status !== 400) {
      setUser(response[0]);
    }
  };

  useEffect(() => {
    getUserById(userId);
  }, [userId]);

  const [modalIsOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }
  const customStyles = {
    content: {
      top: "50%",
      left: "50%",
      right: "auto",
      bottom: "auto",
      marginRight: "-50%",
      transform: "translate(-50%, -50%)",
    },
  };
  const handleReport = (e) => {
    e.preventDefault();
    const response = AskService.reportUser(userId, reportContent);
    if (response?.status !== 400) {
      setReportShow(false);
      setReportMessage("Báo cáo người dùng này thành công");
    }
  };
  return (
    <>
      <span onClick={openModal}>
        <img
          src={`http://localhost:8000/api/users/${user?.id}/images`}
          className="pic rounded-circle"
          style={{ width: "40px", height: '40px' }}
          alt=""
        />
      </span>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {reportShow ? (
          <>
            <div className="form-group mb-2" style={{ minWidth: "300px" }}>
              <label className="form-label">Nội dung báo cáo</label>
              <textarea
                className="form-control"
                rows={5}
                name="content"
                onInput={(e) => handleChange(e)}
                placeholder="Nhập nội dung báo cáo tại đây... "
              />
            </div>
            <div className="d-flex justify-content-between">
              <button className="btn" onClick={(e) => handleReport(e)}>
                Gửi
              </button>
              <button
                className="btn"
                style={{ backgroundColor: "red" }}
                onClick={() => setReportShow(false)}
              >
                Quay lại
              </button>
            </div>
          </>
        ) : (
          <>
            <section className="">
              <div className="row d-flex justify-content-center align-items-center ">
                <div className="" style={{ borderRadius: 15 }}>
                  <div className="p-2">
                    {reportMessage ? (
                      <>
                        <span className="text-success ">{reportMessage}</span>
                      </>
                    ) : (
                      <></>
                    )}
                    <div className="d-flex justify-content-between mb-4 mt-2">
                      {localStorage.getItem("roles").includes("ADMIN") ? (
                        <></>
                      ) : (
                        <>
                          {" "}
                          <button
                            className="btn"
                            onClick={() => setReportShow(!reportShow)}
                          >
                            {" "}
                            <FontAwesomeIcon icon={faFlag} /> Báo cáo
                          </button>
                        </>
                      )}

                      <button
                        onClick={closeModal}
                        className="btn ms-auto"
                        style={{ backgroundColor: "#ce0c23" }}
                      >
                        {" "}
                        Đóng
                      </button>
                    </div>

                    <div className="d-flex text-black">
                      <div className="flex-shrink-0">
                        <img
                          src={`http://localhost:8000/api/users/${user?.id}/images`}
                          alt=""
                          className="img-fluid"
                          style={{ width: 148, height: 150, borderRadius: 10 }}
                        />
                      </div>
                      <div className="flex-grow-1 ms-3">
                        <h5 className="mb-1">{user?.name}</h5>
                        <p className=" mt-2 pb-1" style={{ color: "#2b2a2a" }}>
                          {user?.first_name} {user?.last_name}
                        </p>
                        <div
                          className="d-flex justify-content-start rounded-3 p-2  mt-4"
                          style={{ backgroundColor: "#efefef" }}
                        >
                          <div>
                            <p className="small text-muted mb-1">Tên</p>
                            <p className="mb-0">{user?.first_name}</p>
                          </div>
                          <div className="px-3">
                            <p className="small text-muted mb-1">Giới tính</p>
                            <p className="mb-0">
                              {user?.gender === 0 ? "Nam" : "Nữ"}
                            </p>
                          </div>
                          <div>
                            <p className="small text-muted mb-1">Độ uy tính</p>
                            <p className="mb-0">{user?.reputation}</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className=" pt-1 mt-3">
                      <p className="dis ms-1">
                        <FontAwesomeIcon
                          icon={faEnvelope}
                          style={{ marginRight: "7px" }}
                        />{" "}
                        {user?.email}
                      </p>
                      <p className="dis ms-1 ">
                        <FontAwesomeIcon
                          icon={faPhone}
                          style={{ marginRight: "7px" }}
                        />
                        {user?.phone_number === null
                          ? "Không có"
                          : user?.phone_number}
                      </p>
                      <p className="dis ms-1 ">
                        <FontAwesomeIcon
                          icon={faGlobe}
                          style={{ marginRight: "7px" }}
                        />
                        {user?.social_link === null
                          ? "Không có"
                          : user?.social_link}
                      </p>
                      <p className="dis ms-1 ">
                        <FontAwesomeIcon
                          icon={faAddressCard}
                          style={{ marginRight: "7px" }}
                        />
                        {user?.full_address === null
                          ? "Không có"
                          : user?.full_address}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </Modal>
    </>
  );
};

export default UserModal;
