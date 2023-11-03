import axios from 'axios'
import {axiosPrivate} from "../api/axios"
const USER_URL = 'http://127.0.0.1:8000/api/users'


class UserService {
  getCurrentUserWishlist() {
    return axiosPrivate.get(USER_URL + "/wishlists")
      .then(response => response?.data?.data)
      .catch(error => error?.response)
  }

  addCurrentWishtlistByProductId(productId){
    return axiosPrivate.post(USER_URL + "/wishlists", {
        "product_id": productId
    })
    .then(response => response?.data?.data)
    .catch(error => error?.response)
  }

  getCurrentUser(){
    return axiosPrivate.get(USER_URL + "/info")
      .then(response => response?.data?.data)
      .catch(error => error?.response)
  }
}

export default new UserService()
