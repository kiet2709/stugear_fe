import { useState } from "react";
import "./MyOrder.css";
import { useNavigate } from "react-router-dom";
const MyOrder = () => {
  const navigate = useNavigate()
  const [order, setOrder] = useState([
    {
      id: 1,
      product_id: 1,
      product_title: "Product 1",
      status: "Đang giao",
      created_date: "2023-12-01",
    },
    {
      id: 2,
      product_id: 2,
      product_title: "Product 2",
      status: "Đã giao",
      created_date: "2023-12-02",
    },
    {
      id: 3,
      product_id: 3,
      product_title: "Product 3",
      status: "Đang duyệt",
      created_date: "2023-12-03",
    },
  ]);

  const hanldeViewDetail = (e, orderId) => {
    e.preventDefault();
    navigate(`/member/order-detail/${orderId}`)
  };
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
                #
              </th>
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
                  <th scope="row">1</th>
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
