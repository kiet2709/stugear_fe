import axios from 'axios'

const CATEGORY_URL = 'http://localhost:8000/api/categories'
class CategoryService {
  getAllCategories () {
    return axios.get(CATEGORY_URL)
      .then(response => response?.data?.data)
      .catch(error => error?.response)
  }

  getCategoriesById (id) {
    return axios.get(CATEGORY_URL + `/${id}`)
      .then(response => response?.data?.data)
      .catch(error => error?.response)
  }

  getStatisticByCategoryId (id) {
    return axios.get(CATEGORY_URL + `/${id}/statistic`)
      .then(response => response?.data?.data)
      .catch(error => error?.response)
  }
}

export default new CategoryService()
