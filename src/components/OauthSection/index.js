import "./index.css";
import { GoogleLogin } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import AuthService from "../../service/AuthService";
import { useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import Loading from "../Loading/index"
const OauthSection = ({ text }) => {
  const navigate = useNavigate();
  const [isLoading, setLoading] = useState(false)
  const [isError, setError] = useState("")
  const { setUser } = useAuth();
  const handleOauthResponse = (jwtResponse) => {
    setError("")
    const userInfo = jwtDecode(jwtResponse.credential);
    handleCreateAccount({
      name: userInfo?.name,
      email: userInfo?.email,
      firstName: userInfo?.family_name,
      lastName: userInfo?.given_name,
      password: "password",
      confirmPassword: "password",
    });
  };

  const handleCreateAccount = async (oauthUser) => {
    setLoading(true)
    await AuthService.register(oauthUser);

    const response = await AuthService.login(oauthUser);
    if(response.status === 401){
      setError("Email này đã được đăng ký")
      setLoading(false)
      return
    }
    const accessToken = response.access_token;
    const refreshToken = response.refresh_token;
    const userId = response.user_id;
    const username = response.username;
    const roles = response.roles;

    localStorage.setItem("access_token", accessToken);
    localStorage.setItem("refresh_token", refreshToken);
    localStorage.setItem("user_id", userId);
    localStorage.setItem("username", username);
    localStorage.setItem("roles", roles);
    setUser(response);
    localStorage.setItem(
      "user_image",
      `http://localhost:8000/api/users/${response?.user_id}/images`
    );
    setUser({
      ...response,
      user_image: `http://localhost:8000/api/users/${response?.user_id}/images`,
    });
    setLoading(false)

    if (roles.includes("ADMIN")) {
      navigate("/admin");
    } else {
      navigate("/landing-page");
    }
  };

  return (
    <div className="social mt-4 " style={{marginLeft:'60px', marginRight:'35px'}} >
      {isLoading ? (
        <>

          <Loading/>
        </>
      ): (
        <GoogleLogin
        
        onSuccess={(credentialResponse) => {
          handleOauthResponse(credentialResponse);
        }}
        onError={() => {
          console.log("Login Failed");
        }}
      />
      )}
       {isError ? (
          <>
            <div className="alert alert-danger my-4">{isError}</div>
          </>
        ) :
      (
        <></>
      )}
     
    </div>
  );
};

export default OauthSection;
