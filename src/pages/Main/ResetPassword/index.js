import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";
import "./index.css"
const ResetPassword = () => {
    return (
        <div className="row my-3 justify-content-center w-100">
            <div className="col col-3 box-shadow px-5">

                <div className="social mt-5 align-items-center  justify-content-lg-start">
                    <p className="lead fw-normal mb-0 me-3">Xin chào! </p>
                    <p className="mb-0 mt-2">Hãy đặt lại mật khẩu mới</p>
                </div>

                <form action="#"  >

                    <div className="my-3 input-group flex-nowrap">
                        <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
                        <input required type="password" className="form-control" id="floatingInput" placeholder="Nhập mật khẩu mới" />
                    </div>

                    <div className="my-3 input-group flex-nowrap">
                        <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
                        <input required type="password" className="form-control" id="floatingInput" placeholder="Nhập lại mật khẩu mới" />
                    </div>




                    <div className="my-4">
                        <button className="btn btn-dark text-white w-100 ">Đặt lại mật khẩu</button>
                        <div className="text-center mt-2">
                            <p class="small fw-bold mt-2 pt-1 mb-0">Chưa có tài khoản?
                                <a href="/register" className="link-danger"> Đăng ký</a>
                            </p>

                        </div>
                    </div>

                    <div className="divider d-flex align-items-center my-4">
                        <p className="text-center fw-bold mx-3 mb-0">Hoặc</p>
                    </div>
                    <div className="social mt-2  d-flex flex-row align-items-center  justify-content-lg-start">
                        <p className="lead fw-normal mb-0 me-3">Đăng nhập với: </p>
                        <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <FontAwesomeIcon icon={faFacebookF} />
                        </button>
                        <button type="button" className="btn btn-secondary btn-floating mx-1">
                            <FontAwesomeIcon icon={faGoogle} />
                        </button>
                    </div>

                </form>

            </div>
            <div className="col col-1">

            </div>
            <div className="col col-3 text-center">
                <h1 >Cập nhật mật khẩu</h1>
                <p class="font-italic text-muted mb-0">Hãy thay đổi mật khẩu của bạn</p>
                <img src="assets/images/get-pass.gif" alt="Image" className="img-fluid" />

            </div>
        </div>
    )
}

export default ResetPassword