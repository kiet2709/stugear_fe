import axios from "axios";
import { axiosPrivate } from "../api/axios";
const ORDER_URL = "http://localhost:8000/api/orders";

class PaymentService {
  createOrder(product_id, quantity, price) {
    return axiosPrivate
      .post(ORDER_URL, {
        product_id: product_id,
        quantity: quantity,
        price: price,
      })
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }
  getOrderById(orderId) {
    return axiosPrivate
      .get(ORDER_URL + `/${orderId}`)
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }
  updateStatusBySeller(orderId, status){
    return axiosPrivate
    .patch(ORDER_URL + `/${orderId}/seller`, {
      status: status
    })
    .then((response) => response?.data?.data)
    .catch((error) => error?.response);
  }
  updateStatusByBuyer(orderId, status){
    return axiosPrivate
    .patch(ORDER_URL + `/${orderId}/buyer`, {
      status: status
    })
    .then((response) => response?.data?.data)
    .catch((error) => error?.response);
  }
}

export default new PaymentService();
