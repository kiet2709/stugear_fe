import axios from "axios";

const AUTH_URL = 'http://127.0.0.1:8000/api/auth';

const useRefreshToken = () => {

    return (
        axios.post(AUTH_URL + '/refresh', 
            {
                user_id : localStorage.getItem("user_id"),
                refresh_token: localStorage.getItem("refresh_token"),
                token: localStorage.getItem("access_token")
            }
        )
        .then(response => {
            
            console.log(response)
            return response?.data?.data
        })
        .catch(error => error?.response)
    );

};

export default useRefreshToken;
