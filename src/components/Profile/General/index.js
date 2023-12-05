import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faSchool,
  faBirthdayCake,
  faAddressBook,
} from "@fortawesome/free-solid-svg-icons";
import { useEffect, useState } from "react";
import UserService from "../../../service/UserService";
import useAuth from "../../../hooks/useAuth";
import { ToastContainer, toast } from "react-toastify";
const General = () => {


  const [userInfo, setUserInfo] = useState({});
  const {user,setUser} = useAuth()
  const [isUpdated, setUpdated] = useState(false);

  const getCurrentUser = async (id) => {
    const response = await UserService.getCurrentUser();

    if (response == 500) {
      console.log("Something went wrong");
    } else {
      setUserInfo(response);
    }
  };

  useEffect(() => {
    getCurrentUser();
  }, []);
  const handleChange = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleFileChange = async(e) => {
    await UserService.uploadImage(user?.user_id, e.target.files[0])
    setUser({...user, user_image: `http://54.144.166.72/api/users/${user?.user_id}/images/` + `?timestamp=${new Date().getTime()}`})
  };
  const handleSubmit = async(e) => {
    e.preventDefault()
    const response = await UserService.updateUserProfile(userInfo)
    setUpdated(true)
    toast.success("Thay đổi thông tin thành công!", {
      position: "top-center",
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  }
  return (
    <div className="tab-pane fade active show" id="account-general">
      <div className="card-body row d-flex media align-items-center">
        <div className="col-2">
          <img
            src={user?.user_image}
            alt=""
            className="img-fluid"
          />
        </div>
        <div className="media-body col">
  <label className="btn btn-outline-primary">
    Thay đổi ảnh đại diện
    <input type="file" className="account-settings-file" style={{ display: 'none' }} 
     onChange={(e) => handleFileChange(e)}/>
  </label>
  <div className="text-light text-dark small mt-3">
    Cho phép JPG, hoặc PNG.
  </div>
</div>

      </div>

      <div className="card-body">
        <form onSubmit={(e) => handleSubmit(e)}>
          {/* <div className="form-group">
            <label className="form-label">Tiểu sử</label>
            <textarea className="form-control" rows={5} name="bio" />
          </div>
          <hr className="border-dark my-5" /> */}

          <h4 className="font-weight-bold pl-4">Thông tin cá nhân</h4>
          <div className="row mt-3">
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faUser} />
              </span>
              <input
                required
                disabled
                type="text"
                className="form-control"
                placeholder="Tên đăng nhập"
                value={userInfo.name}
                onChange={(e) => handleChange(e)}
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
                disabled
                className="form-control"
                placeholder="Email"
                value={userInfo.email}
                onChange={(e) => handleChange(e)}
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
                value={userInfo.first_name}
                onChange={(e) => handleChange(e)}
                name="first_name"
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
                value={userInfo.last_name}
                onChange={(e) => handleChange(e)}
                name="last_name"
              />
            </div>
          </div>

          <div className="row">
            <div className="col my-3 input-group flex-nowrap">
              <span className="input-group-text">
                {" "}
                <FontAwesomeIcon icon={faAddressBook} />
              </span>
              <input
                required
                disabled
                type="text"
                className="form-control"
                placeholder="Địa chỉ"
                value={userInfo.full_address}
                onChange={(e) => handleChange(e)}
                name="full_address"
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
                disabled
                placeholder="Số điện thoại"
                value={userInfo.phone_number}
                onChange={(e) => handleChange(e)}
                name="phone_number"
              />
            </div>
          </div>
          <div className="mt-3 d-flex justify-content-end">
            <button type="submit" className="btn btn-primary">
              Lưu thay đổi
            </button>
            &nbsp;
          </div>
        </form>
      </div>
      {isUpdated ? (
            <>
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
            </>
          ) : (
            <></>
          )}
    </div>
  );
};

export default General;
