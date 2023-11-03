import { createContext, useState } from 'react'
import PropTypes from 'prop-types';

const AuthContext = createContext({})

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState({
    user_id: localStorage.getItem("user_id"),
    access_token: localStorage.getItem("access_token"),
    refresh_token: localStorage.getItem("refresh_token"),
    roles: localStorage.getItem("roles"),
    username: localStorage.getItem("username")
  })

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

// Add PropTypes validation
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { AuthContext, AuthProvider }
