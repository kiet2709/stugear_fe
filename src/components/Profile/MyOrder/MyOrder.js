import { useEffect, useState } from "react";
import "./MyOrder.css";
import { useNavigate } from "react-router-dom";
import UserService from "../../../service/UserService";
const MyOrder = () => {
  const navigate = useNavigate()

  const [order, setOrder] = useState([]);

  const hanldeViewDetail = (e, orderId) => {
    e.preventDefault();
    navigate(`/member/order-detail/${orderId}`)
  };
  const getOrders = async () => {
    const response = await UserService.getCurrentUserOrdersHistory()
    console.log(response)
    if(response?.status !== 400) {
      setOrder(response?.data)
    }
  }
  useEffect(() => {
    getOrders()
  }, [])
  return (
    <>
      <div>
        <table className="order-table table ">
          <thead style={{ background: "#7355F7" }}>
            <tr>

              <th
                className="text-white"
                style={{ background: "#7355F7" }}
                scope="col"
              >
                ID
              </th>
              <th
                className="text-white"
                style={{ background: "#7355F7" }}
                scope="col"
              >
                Sản phẩm
              </th>
              <th
                className="text-white"
                style={{ background: "#7355F7" }}
                scope="col"
              >
                Trạng thái
              </th>
              <th
                className="text-white"
                style={{ background: "#7355F7" }}
                scope="col"
              >
                Ngày tạo
              </th>
              <th
                className="text-white"
                style={{ background: "#7355F7" }}
                scope="col"
              >
                Chi tiết
              </th>
            </tr>
          </thead>
          <tbody>
            {order.map((item) => {
              return (
                <tr>

                  <td>{item.id}</td>
                  <td>{item.product_title}</td>
                  <td>{item.status}</td>
                  <td>{item.created_date}</td>
                  <td>
                    <button
                      className="btn"
                      onClick={(e) => hanldeViewDetail(e, item.id)}
                    >
                      Chi tiết
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </>
  );
};
export default MyOrder;
