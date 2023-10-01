import { useState } from "react"
import { Link } from "react-router-dom"
import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons";

const Login = () => {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleSubmit = () => {

    }
    return (
            <div className="row my-3 justify-content-center w-100">
                <div className="col col-3 box-shadow px-5">
                  
                        <div className="social mt-5  d-flex flex-row align-items-center  justify-content-lg-start">
                            <p className="lead fw-normal mb-0 me-3">Đăng nhập với: </p>
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
                 

                    <form action="#"  >

                        <div className="my-3 input-group flex-nowrap">
                          <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope}/></span>
                         <input required type="email" className="form-control" id="floatingInput" placeholder="Nhập địa chỉ email" />
                        </div>
                        <div className="my-3 input-group flex-nowrap" >
                            <span className="input-group-text"> <FontAwesomeIcon icon={faLock}/></span>
                            <input required type="password" className="form-control" id="floatingPassword" placeholder="Nhập mật khẩu" />
                        </div>

                        <div className="d-flex justify-content-between align-items-center">
                            <div className="form-check mb-0">
                                <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3" />
                                <label className="form-check-label" htmlFor="form2Example3">
                                    Nhớ mật khẩu
                                </label>
                            </div>
                            <a href="/find-account" style={{textDecoration: 'none'}} className="text-body">Quên mật khẩu?</a>
                        </div>

                        <div className="my-4">
                        <button className="btn btn-dark text-white w-100 ">Đăng nhập</button>
                            <p class="small fw-bold mt-2 pt-1 mb-0">Chưa có tài khoản?
                            <a href="/register" className="link-danger"> Đăng ký</a></p>
                        </div>

                    </form>

                </div>
                <div className="col col-1">

                </div>
                <div className="col col-3 text-center">
                    <h1>Hãy đăng nhập</h1>
                    <p class="font-italic text-muted mb-0">Đăng nhập tài khoản của bạn tại đây</p>
                    <img src="assets/images/login.gif" alt="Image" className="img-fluid" />
                    
                </div>
            </div>
    )
}
export default Login