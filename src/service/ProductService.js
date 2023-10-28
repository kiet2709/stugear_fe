import axios from 'axios'

const PRODUCT_URL = 'http://127.0.0.1:8000/api/products'
class ProductService {
  getProductsByCategoryId (id) {
    return axios
      .get(PRODUCT_URL + `/category/${id}`)
      .then((response) => response?.data?.data)
      .catch((error) => error?.response)
  }

  getProductById(id){
    return axios
        .get(PRODUCT_URL + `/${id}`)
        .then((response) => response?.data?.data)
        .catch((error) => error?.response)
  }
}

export default new ProductService()

