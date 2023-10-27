import { axiosPrivate } from "../api/axios"
import axios from "axios";

const PRODUCT_URL = 'http://127.0.0.1:8000/api/users';


class ProductService {
    getProductById (id){
        return axiosPrivate.get(PRODUCT_URL + `/${id}`);
    }

    uploadImageByProductId(id, file){
        console.log(file)
        return axiosPrivate.post(PRODUCT_URL + `/${id}/upload-image`, {
            image: file
        },
        {
            headers: {
                'Content-Type': 'multipart/form-data'
            }
        })
    }
}

export default new ProductService();
