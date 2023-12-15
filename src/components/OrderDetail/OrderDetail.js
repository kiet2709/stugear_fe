import "./OrderDetail.css";
import useAuth from "../../hooks/useAuth";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import CustomModal from "../Modal/Modal";
import { ToastContainer, toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import OrderService from "../../service/OrderService";
const OrderDetail = () => {
  let {slug} = useParams()
  const navigate = useNavigate()
  const {user} = useAuth()
  const [isConfirm, setConfirm] = useState(false)
  const [order, setOrder] = useState({})

  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };
  const handleSave = () => {
    handleConfirmOrder();
    setShow(false)
    setConfirm(true)
    toast.success("Xác nhận đơn hàng thành công!", {
        position: "top-center",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
  };
  const handleConfirmOrder = async () => {
    setOrder({...order, status: "Đã nhận hàng"})
  };
  const getOrder = async (orderId) => {
    let response = await OrderService.getOrderById(orderId)

    if(response?.status !== 400){

      const formattedProduct = new Intl.NumberFormat('vi-VN', {
        style: 'currency',
        currency: 'VND',
    }).format(response?.product_price);

    const formattedTotal = new Intl.NumberFormat('vi-VN', {
      style: 'currency',
      currency: 'VND',
  }).format(response?.total_price);
      response={...response, product_price: formattedProduct, total_price: formattedTotal}
      setOrder(response)
    }
  }
  useEffect(() => {
    if(slug){
      getOrder(slug)
    }else{
        navigate("/not-found")
    }
    if(order?.status === "Đã giao hàng"){
        setShow(true);
    }
  }, [])
  return (
    <>
      <section className="h-100 gradient-custom">
        <div className="container-fluid py-5 h-100">
          <div className="row d-flex justify-content-center align-items-center h-100">
            <div className="col-lg-10 col-xl-8">
              <div className="card" style={{ borderRadius: 10 }}>
                <div className="card-header px-4 py-5">
                  <h5 className="text-muted mb-0">
                    Cảm ơn vì đã đặt hàng, {user.username}
                    <span style={{ color: "#a8729a" }} />!
                  </h5>
          
                </div>
                <div className="card-body p-4">
                  <div className="d-flex justify-content-between align-items-center mb-4">
                    <p
                      className="lead fw-normal mb-0"
                      style={{ color: "#a8729a" }}
                    >
                      Đơn hàng
                    </p>
                  </div>
                  <div className="card shadow-0 border mb-4">
                    <div className="card-body">
                      <div className="row">
                        <table className="table">
                          <thead>
                            <tr>
                              <th width="5%">Hình</th>
                              <th width="10%">Tựa sách</th>
                              <th width="30%">Giá</th>
                              <th width="20%">Số lượng</th>
                              <th width="30%">Tổng cộng</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td className="thumbnail-img">
                                <Link>
                                    <img src={order.product_image} alt ="" className="small-image"/>
                                </Link>
                              </td>
                              <td className="name-pr">
                                <div
                                  style={{
                                    height: 70,
                                    width: 300,
                                    overflow: "auto",
                                  }}
                                >
                                  {order?.product_title}
                                </div>
                              </td>
                              <td className="price-pr">
                                <p>
                                  {order.product_price}
                                </p>
                              </td>
                              <td className="quantity-box">
                                <p>
                                    {order.quantity}
                                </p>
                              </td>
                              <td>
                                <p>
                                {order.total_price}
                                </p>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                    
                      <div className="d-flex flex-row justify-content-between align-items-center align-content-center">
                        
                        {order?.status === "Đang xử lý" ? (
                            <>
                                 <span
                          className="d-flex justify-content-center 
												align-items-center big-dot dot"
                        ></span>
                            </>
                        ): (
                            <>
                            <span className="dot" />
                            </>
                        )}
                        
                   

                        <hr className="flex-fill track-line" />

                        {order?.status === "Đang giao hàng" ? (
                            <>
                                 <span
                          className="d-flex justify-content-center 
												align-items-center big-dot dot"
                        ></span>
                            </>
                        ): (
                            <>
                            <span className="dot" />
                            </>
                        )}

            

                        <hr className="flex-fill track-line" />

                        {order?.status === "Đã giao hàng" ? (
                            <>
                                 <span
                          className="d-flex justify-content-center 
												align-items-center big-dot dot"
                        ></span>
                            </>
                        ): (
                            <>
                            <span className="dot" />
                            </>
                        )}
                        <hr className="flex-fill track-line" />

                        {order?.status === "Đã nhận hàng" ? (
                            <>
                                 <span
                          className="d-flex justify-content-center 
												align-items-center big-dot dot"
                        ></span>
                            </>
                        ): (
                            <>
                            <span className="dot" />
                            </>
                        )}
                       
                        

                      </div>
                      <div className="d-flex flex-row justify-content-between align-items-center">
                        <div className="d-flex flex-column align-items-start">
                          <span>Đang xử lý</span>
                        </div>
                        <div className="d-flex flex-column align-items-start">
                          <span>Đang giao hàng</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center">
                          <span>Đã giao hàng</span>
                        </div>
                        <div className="d-flex flex-column justify-content-center align-items-center">
                          <span>Đã nhận hàng</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="d-flex justify-content-between pt-2">
                    <p className="fw-bold mb-0">Chi tiết đơn hàng</p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Phí giao hàng:</span> 0 VNĐ
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Mã đơn hàng :  {order.id}
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">Giảm giá:</span> 0 VNĐ
                    </p>
                  </div>
                  <div className="d-flex justify-content-between">
                    <p className="text-muted mb-0">
                      Ngày đặt hàng :  {order.created_date}
                    </p>
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-4">VAT:</span> 0 VNĐ
                    </p>
                  </div>
                  <div className="d-flex justify-content-between mb-5">
                    <p className="text-muted mb-0">
                      <span className="fw-bold me-2">Tổng: </span>{order.total_price} 
                    </p>
                  </div>
                  <div className="shopping-box">
                    {order?.status === "Đã giao hàng" ? (
                        <>
                        <p className="text-success">Có vẻ bạn đã nhận được hàng?. Vui lòng xác nhận:</p>
                        <button className="btn">Xác nhận đã nhận được hàng</button>
                        </>
                    ):
                    (
                        <></>
                    )}
                  </div>
                </div>
                <div
                  className="card-footer border-0 px-4 py-5"
                  style={{
                    backgroundColor: "#a8729a",
                    borderBottomLeftRadius: 10,
                    borderBottomRightRadius: 10,
                  }}
                >
                  <h5 className="d-flex align-items-center justify-content-end text-white text-uppercase mb-0">
                    Tiền phải trả:  {" "}
                    <span className="h2 mb-0 ms-2">
                    {order.total_price}
                    </span>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
        <CustomModal
            handleSave={handleSave}
            handleClose={handleClose}
            show={show}
            heading={"Xác nhận đã nhận được hàng"}
            body={"Có vẻ bạn đã nhận được hàng, xin vui lòng xác nhận"}
          ></CustomModal>

        {isConfirm ? (
        <>
          <ToastContainer
            position="top-center"
            autoClose={5000}
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
      </section>
    </>
  );
};

export default OrderDetail;
