import axios from "axios";

const AUTH_URL = 'http://127.0.0.1:8000/api/auth';

const useRefreshToken = () => {
    return (
        axios.post(AUTH_URL + '/refresh', {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem("access_token")}`
            }
        })
        .then(response => response?.data?.data)
        .catch(error => error?.response)
    );

};

export default useRefreshToken;
