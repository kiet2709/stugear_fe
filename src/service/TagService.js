import axios from 'axios'
import { axiosPrivate } from '../api/axios'

const TAG_URL = 'http://127.0.0.1:8000/api/tags'
class TagService {
    getAllTags(){
        return axios
            .get(TAG_URL)
            .then((response) => response?.data?.data)
            .catch((error) => error?.response)
      }
      
  createTags(tags){
    return axiosPrivate.post(TAG_URL, {
        names: tags
    })
    .then((response) => response?.data?.data)
    .catch((error) => error?.response);
  }
}

export default new TagService()

