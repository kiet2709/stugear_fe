import axios from 'axios'
import { axiosPrivate } from '../api/axios'

const PRODUCT_URL = 'http://127.0.0.1:8000/api/products'
class ProductService {
  getProductsByCategoryId (id, page) {
    return axios
      .get(PRODUCT_URL + `/category/${id}?page=${page}&limit=1`)
      .then((response) => response?.data)
      .catch((error) => error?.response)
  }

  getProductById(id){
    return axios
        .get(PRODUCT_URL + `/${id}`)
        .then((response) => response?.data?.data)
        .catch((error) => error?.response)
  }

  getCommentsByProductId(id, currentPage) {
    return axios
          .get(PRODUCT_URL + `/${id}/comments?page=${currentPage}&limit=1`)
          .then((response) => response?.data)
          .catch((error) => error?.response)
  }

  getRatingByProductId(id){
    return axios
          .get(PRODUCT_URL+ `/${id}/ratings`)
          .then((response) => response?.data?.data)
          .catch((error) => error?.response)
  }

  createCommentByProductId(id, comment){
    console.log({
      "content" : comment.content,
      "parent_id": comment?.parent_id ? comment.parent_id : 0,
      "reply_on": comment?.reply_on ? comment.reply_on : 0,
      "product_id": id,
      "rating": comment?.rating ? comment.rating : 0,
    })
    return axiosPrivate.post(PRODUCT_URL + `/${id}/comments`, {
      "content" : comment.content,
      "parent_id": comment?.parent_id ? comment.parent_id : 0,
      "reply_on": comment?.reply_on ? comment.reply_on : 0,
      "product_id": id,
      "rating": comment?.rating ? comment.rating : 0,
    })
    
    .then((response) => response)
    .catch((error) => error?.response)
  }
}

export default new ProductService()

