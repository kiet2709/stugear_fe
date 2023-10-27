import axios from 'axios'

const AUTH_URL = 'http://127.0.0.1:8000/api/auth'
class AuthService {
  register (user) {
    return axios.post(AUTH_URL + '/register', {
      name: user.name,
      email: user.email,
      password: user.password,
      confirm_password: user.confirmPassword,
      first_name: user.firstName,
      last_name: user.lastName
    })
      .then(response => response)
      .catch(error => error?.response)
  }

  login (user) {
    return axios.post(AUTH_URL + '/login', {
      email: user.email,
      password: user.password
    })
      .then(response => response?.data?.data)
      .catch(error => error?.response)
  }

  findUserByEmail (userEmail) {
    return axios.get(AUTH_URL + '/send-reset-password-email?email=' + userEmail)
      .then(response => response)
      .catch(error => error?.response)
  }

  resetPassword (resetInfo) {
    console.log(resetInfo)
    return axios.post(AUTH_URL + '/reset-password', {
      email: 'duckhailinux@gmail.com',
      verify_code: resetInfo.pin,
      password: resetInfo.password
    })
      .then(response => response)
      .catch(error => error?.response)
  }
}

export default new AuthService()
