import { Link } from "react-router-dom"
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faUser, faEnvelope, faPhone, faLock } from "@fortawesome/free-solid-svg-icons";

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
                 <div className="social mt-5  d-flex flex-row align-items-center  justify-content-lg-start">
                            <p className="lead mb-0 me-3 fw-bold">Đăng ký với: </p>
                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                                <FontAwesomeIcon icon={faFacebookF}/>
                            </button>
                            <button type="button" className="btn btn-secondary btn-floating mx-1">
                                <FontAwesomeIcon icon={faGoogle}/>
                            </button>
                        </div>
                        <div className="divider d-flex align-items-center my-4">
                            <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
                        </div>
                <form action="#">
                    <div className="row">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                            <input required type="text" className="form-control" id="floatingInput" placeholder="Nhập tên" />
                        </div>
                        <div className="col my-3 input-group flex-nowrap" >
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                            <input required type="password" className="form-control" id="floatingPassword" placeholder="Nhập họ" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope} /></span>
                            <input required type="email" className="form-control" id="floatingInput" placeholder="Nhập địa chỉ email" />
                        </div>


                    </div>
                    <div className="row">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faPhone} /></span>
                            <input required type="email" className="form-control" id="floatingInput" placeholder="Nhập số điện thoại" />
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