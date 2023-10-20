import axios from 'axios';

const CATEGORY_URL = 'http://127.0.0.1:8000/api/categories';
class CategoryService {

    getAllCategories(user){
        return axios.get(CATEGORY_URL)
    }
}

export default new CategoryService();
