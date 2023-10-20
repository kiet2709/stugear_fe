import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faEnvelope, faPhone, faSchool, faBirthdayCake } from "@fortawesome/free-solid-svg-icons";
const General = () => {
    return (
        <div className="tab-pane fade active show" id="account-general">
            <div className="card-body row d-flex media align-items-center">
                <div className="col-2">
                    <img src="https://bootdey.com/img/Content/avatar/avatar1.png" alt className="img-fluid" />
                </div>
                <div className="media-body col">
                    <label className="btn btn-outline-primary">
                        Thay đổi ảnh đại diện
                        <input type="file" className="account-settings-fileinput" />
                    </label>
                    <div className="text-light text-dark small mt-3">Cho phép JPG, hoặc PNG.</div>
                </div>

            </div>


            <div className="card-body">
                <form action="#" >
                    <div className="form-group">
                        <label className="form-label">Tiểu sử</label>
                        <textarea className="form-control" rows={5} name="bio" />
                    </div>
                    <hr className="border-dark my-5" />

                    <h4 className="font-weight-bold pl-4">Thông tin cá nhân</h4>
                    <div className="row mt-3">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                            <input required type="text" className="form-control" placeholder="Tên đăng nhập"
                                name="name"
                            />
                        </div>
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faEnvelope} /></span>
                            <input required type="email" className="form-control" placeholder="Email"
                                name="email"
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                            <input required type="text" className="form-control" placeholder="Tên"
                                name="firstName"
                            />
                        </div>
                        <div className="col my-3 input-group flex-nowrap" >
                            <span className="input-group-text"> <FontAwesomeIcon icon={faUser} /></span>
                            <input required type="text" className="form-control" placeholder="Họ"
                                name="lastName"
                            />
                        </div>

                    </div>

                    <div className="row">


                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faBirthdayCake} /></span>
                            <input required type="text" className="form-control" placeholder="Ngày sinh"
                                name="name"
                            />
                        </div>
                        <div className="col my-3 input-group flex-nowrap">
                            <span className="input-group-text"> <FontAwesomeIcon icon={faPhone} /></span>
                            <input required type="text" className="form-control" placeholder="Số điện thoại"
                                name="name"
                            />
                        </div>
                    </div>
                    <div className="mt-3 d-flex justify-content-end">
                        <button type="button" className="btn btn-primary">Lưu thay đổi</button>&nbsp;
                        <button type="button" className="btn btn-danger">Hủy</button>
                    </div>
                </form>


            </div>
        </div>
    )
}

export default General