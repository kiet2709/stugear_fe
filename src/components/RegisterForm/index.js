import "./index.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faLock, faAv } from "@fortawesome/free-solid-svg-icons";
import OauthSection from "../OauthSection";
import Divider from "../../components/Divider";
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import AuthService from "../../service/AuthService";
import { useNavigate } from "react-router-dom";
import Loading from "../../components/Loading/index";
import { CSpinner } from "@coreui/react";

const RegisterForm = () => {

    const navigate = useNavigate()
    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value })
    }
    const [loading, setLoading] = useState(false);
    const [user, setUser] = useState({
        name: "",
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: ""
    })

    const handleCheckPassword = () => {
        return user.password === user.confirmPassword ? true : false;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (handleCheckPassword()) {
            try {
                setLoading(true);
                await AuthService.register(user);
                setLoading(false);
                navigate('/login');
            } catch (err) {
                console.log(err);
                setLoading(false);
            }
        } else {
            console.log('Mật khẩu xác nhận không chính xác');
        }

    };

    return (
        <>

            <div className="row my-3 justify-content-center w-100">
                <div className="col col-4 text-center">

                    <h1>Hãy tạo tài khoản {loading}</h1>
                    <p class="font-italic text-muted mb-0">Nhập thông tin để tạo tài khoản của bạn</p>
                    <img src="assets/images/register.gif" alt="Image" className="img-fluid" />


                </div>
                <div className="col col-1">

                </div>
                <div className="col col-4 box-shadow px-5">
                    <OauthSection text="Đăng ký với: " />
                    <Divider />
                    {
                        loading ? (
                            <Loading />
                        ) :
                            (
                                <form action="#" onSubmit={(e) => handleSubmit(e)}>
                                    <div className="row">
                                        <div className="col my-3 input-group flex-nowrap">
                                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                                            <input required type="text" className="form-control" placeholder="Tên đăng nhập"
                                                name="name"
                                                onChange={(e) => handleChange(e)}
                                                value={user.name} />
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col my-3 input-group flex-nowrap">
                                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                                            <input required type="text" className="form-control" placeholder="Tên"
                                                name="firstName"
                                                onChange={(e) => handleChange(e)} 
                                                value={user.firstName}/>
                                        </div>
                                        <div className="col my-3 input-group flex-nowrap" >
                                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                                            <input required type="text" className="form-control" placeholder="Họ"
                                                name="lastName"
                                                onChange={(e) => handleChange(e)} 
                                                value={user.lastName}/>
                                        </div>
                                    </div>
                                    <div className="row">
                                        <div className="col my-3 input-group flex-nowrap">
                                            <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope} /></span>
                                            <input required type="email" className="form-control" placeholder="Email"
                                                name="email"
                                                onChange={(e) => handleChange(e)} 
                                                value={user.email}/>
                                        </div>


                                    </div>

                                    <div className="row">
                                        <div className="col my-3 input-group flex-nowrap">
                                            <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
                                            <input required type="password" className="form-control" placeholder="Mật khẩu"
                                                name="password"
                                                onChange={(e) => handleChange(e)} 
                                                value={user.password}/>
                                        </div>
                                        <div className="col my-3 input-group flex-nowrap">
                                            <span className="input-group-text"> <FontAwesomeIcon icon={faLock} /></span>
                                            <input required type="password" className="form-control" placeholder="Nhập lại mật khẩu"
                                                name="confirmPassword"
                                                onChange={(e) => handleChange(e)} 
                                                value={user.confirmPassword}/>
                                        </div>
                                    </div>
                                    <div className="my-4">
                                        <button className="btn btn-dark text-white w-100 ">Đăng ký</button>
                                        <p class="small fw-bold mt-2 pt-1 mb-0">Đã có tài khoản?
                                            <a href="/login" className="link-danger"> Đăng nhập</a></p>
                                    </div>
                                </form>
                            )
                    }


                </div>
            </div>

        </>


    )
}

export default RegisterForm