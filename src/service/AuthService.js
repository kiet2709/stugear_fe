import axios from 'axios';

const AUTH_URL = 'http://127.0.0.1:8000/api';
class AuthService {

    register(user) {
        return axios.post(AUTH_URL + '/register', {
            name: user.name,
            email : user.email,
            password : user.password,
            confirm_password: user.confirmPassword,
            first_name: user.firstName,
            last_name: user.lastName
            
        });
    }
}

export default new AuthService();
