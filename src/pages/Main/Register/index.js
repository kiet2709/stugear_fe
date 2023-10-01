import { Link } from "react-router-dom"
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";
import OauthSection from "../../../components/OauthSection";
import Divider from "../../../components/Divider";

const Register = () => {
    return (
        <div className="row my-3 justify-content-center w-100">
            <div className="col col-4 text-center">
                <h1>Hãy tạo tài khoản</h1>
                <p class="font-italic text-muted mb-0">Nhập thông tin để tạo tài khoản của bạn</p>
                <img src="assets/images/register.gif" alt="Image" className="img-fluid" />


            </div>
            <div className="col col-1">

            </div>
            <div className="col col-4 box-shadow px-5">
                <OauthSection text="Đăng ký với: "/>
                <Divider/>
                <form action="#">
                    <div className="row">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                            <input required type="text" className="form-control" placeholder="Nhập tên" />
                        </div>
                        <div className="col my-3 input-group flex-nowrap" >
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                            <input required type="text" className="form-control" placeholder="Nhập họ" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope} /></span>
                            <input required type="email" className="form-control" placeholder="Nhập địa chỉ email" />
                        </div>


                    </div>

                    <div className="row">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
                            <input required type="password" className="form-control" id="floatingInput" placeholder="Nhập mật khẩu" />
                        </div>
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
                            <input required type="password" className="form-control" id="floatingInput" placeholder="Nhập lại mật khẩu" />
                        </div>
                    </div>
                    <div className="my-4">
                        <button className="btn btn-dark text-white w-100 ">Đăng ký</button>
                        <p class="small fw-bold mt-2 pt-1 mb-0">Đã có tài khoản?
                            <a href="/login" className="link-danger"> Đăng nhập</a></p>
                    </div>
                </form>

            </div>
        </div>

    )
}

export default Register