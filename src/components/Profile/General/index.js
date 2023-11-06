import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faSchool,
  faBirthdayCake,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import UserService from "../../../service/UserService";
const General = () => {
  const handleUploadImage = () => {
    UserService.uploadImage();
  };

  const [user, setUser] = useState({});

  const getCurrentUser = async (id) => {
    const response = await UserService.getCurrentUser();
    console.log(response)
    if (response == 500) {
      console.log("Something went wrong");
    } else {
      setUser(response);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, [localStorage.getItem("user_id")]);

  return (
    <div className="tab-pane fade active show" id="account-general">
      <div className="card-body row d-flex media align-items-center">
        <div className="col-2">
          <img
            src={`http://127.0.0.1:8000/api/users/${localStorage.getItem(
              "user_id"
            )}/images`}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="media-body col">
  <label className="btn btn-outline-primary">
    Thay đổi ảnh đại diện
    <input type="file" className="account-settings-file" style={{ display: 'none' }} />
  </label>
  <div className="text-light text-dark small mt-3">
    Cho phép JPG, hoặc PNG.
  </div>
</div>

      </div>

      <div className="card-body">
        <form action="#">
          <div className="form-group">
            <label className="form-label">Tiểu sử</label>
            <textarea className="form-control" rows={5} name="bio" />
          </div>
          <hr className="border-dark my-5" />

          <h4 className="font-weight-bold pl-4">Thông tin cá nhân</h4>
          <div className="row mt-3">
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Tên đăng nhập"
                value={user.name}
                name="name"
              />
            </div>
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faEnvelope} />
              </span>
              <input
                required
                type="email"
                className="form-control"
                placeholder="Email"
                value={user.email}
                name="email"
              />
            </div>
          </div>

          <div className="row">
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Tên"
                value={user.first_name}
                name="firstName"
              />
            </div>
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Họ"
                value={user.last_name}
                name="lastName"
              />
            </div>
          </div>

          <div className="row">
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faBirthdayCake} />
              </span>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Ngày sinh"
                value={user.birthdate}
                name="name"
              />
            </div>
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faPhone} />
              </span>
              <input
                required
                type="text"
                className="form-control"
                placeholder="Số điện thoại"
                value={user.phone_number}
                name="name"
              />
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <button type="button" className="btn btn-primary">
              Lưu thay đổi
            </button>
            &nbsp;
          </div>
        </form>
      </div>
    </div>
  );
};

export default General;
