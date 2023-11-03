import axios from 'axios'

const PRODUCT_URL = 'http://127.0.0.1:8000/api/products'
class ProductService {
  getProductsByCategoryId (id, page) {
    return axios
      .get(PRODUCT_URL + `/category/${id}?page=${page}`)
      .then((response) => response?.data)
      .catch((error) => error?.response)
  }

  getProductById(id){
    return axios
        .get(PRODUCT_URL + `/${id}`)
        .then((response) => response?.data?.data)
        .catch((error) => error?.response)
  }

  getCommentsByProductId(id) {
    return axios
          .get(PRODUCT_URL + `/${id}/comments`)
          .then((response) => response?.data?.data)
          .catch((error) => error?.response)
  }

  getRatingByProductId(id){
    return axios
          .get(PRODUCT_URL+ `/${id}/ratings`)
          .then((response) => response?.data?.data)
          .catch((error) => error?.response)
  }
}

export default new ProductService()

