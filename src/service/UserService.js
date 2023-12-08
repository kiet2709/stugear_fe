import axios from "axios";
import { axiosPrivate } from "../api/axios";
const USER_URL = "http://localhost:8000/api/users";

class UserService {
  getCurrentUserWishlist() {
    return axiosPrivate
      .get(USER_URL + "/wishlists")
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }

  removeCurrentUserWishListByProductId(id) {
    console.log(id);
    return axiosPrivate
      .post("http://localhost:8000/api/wishlists/remove", {
        product_id: id,
      })
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }

  addCurrentWishtlistByProductId(productId) {
    return axiosPrivate
      .post(USER_URL + "/wishlists", {
        product_id: productId,
      })
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }

  getCurrentUser() {
    return axiosPrivate
      .get(USER_URL + "/info")
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }

  getCurrentUserImage(id) {
    return axiosPrivate
      .get(USER_URL + `/${id}/images`)
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }

  getCurrentUserProducts(currentPage) {
    return axiosPrivate
      .get(
        `http://localhost:8000/api/products/current?page=${currentPage}&limit=3`
      )
      .then((response) => response?.data)
      .catch((error) => error?.response);
  }

  sendVerifyEmail(email) {
    return axiosPrivate
      .get(
        `http://localhost:8000/api/products/send-verify-email?email=${email}`
      )
      .then((response) => response?.data)
      .catch((error) => error?.response);
  }
  getTopContributors() {
    return axios
      .get(USER_URL)
      .then((response) => response?.data)
      .catch((error) => error?.response);
  }
  uploadImage(userId, file) {
    console.log(file);
    return axiosPrivate
      .post(
        USER_URL + `/${userId}/upload-image`,
        {
          image: file,
        },
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      .then((response) => response?.data)
      .catch((error) => error?.response);
  }
  updateUserProfile(userInfo) {
    return axiosPrivate
      .patch(USER_URL + "/info", {
        first_name: userInfo.first_name,
        last_name: userInfo.last_name,
      })
      .then((response) => response?.data)
      .catch((error) => error?.response);
  }
  getAllUsers() {
    return axiosPrivate
      .get(USER_URL)
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }

  updateUserStatus(userId, status) {
    return axiosPrivate
      .patch(USER_URL + `/status/${userId}`, {
        user_id: status,
        status: status,
      })
      .then((response) => response?.data?.data)
      .catch((error) => error?.response);
  }
}

export default new UserService();
