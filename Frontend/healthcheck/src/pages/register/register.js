import "./register.css";
import mapBackground from "../icon/mapBackground.png";
import mail from "../icon/envelope-closed 1.svg";
import lock from "../icon/lock 1.svg";
import name from "../icon/nameBadge.svg";
import age from "../icon/age.svg";
import height from "../icon/height.svg";
import weight from "../icon/weight.svg";

import { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";

import { useNavigate } from "react-router-dom";

function Register() {
  const [user_email, setEmail] = useState("");
  const [encrypted_password, setPassword] = useState("");
  const [navigate, setNavaigate] = useState(false);

  const submit = async (e) => {
    e.preventDefault();

    const respone = await axios.post("http://localhost:8000/users/register", {
      user_email,
      encrypted_password,
    });
    console.log(respone.data);

    setNavaigate(true);
  };
  const navigateHome = useNavigate();

  const handleLoginClick = () => {
    navigateHome("/");
  };
  if (navigate) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="container">
      <div class="register2">
        <img class="image-2-icon" alt="" src={mapBackground}></img>

        <div class="login-box">
          <div class="login-box-child"></div>

          <b class="create-account">Create account</b>

          <form onSubmit={submit}>
            <div class="inputs">
              <div class="box">
                <input
                  class="input"
                  type="email"
                  placeholder="Email"
                  onChange={(e) => setEmail(e.target.value)}
                ></input>
                <img class="group-item" alt="" src={mail}></img>
              </div>
              <div class="box">
                <input
                  class="input"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                ></input>
                <img class="login-box-item" alt="" src={lock}></img>
              </div>
              <div class="box">
                <input class="input2"></input>
                <img class="login-box-inner" alt="" src={name}></img>
              </div>

              <div class="box">
                <input class="input2"></input>
                <img class="group-icon" alt="" src={age}></img>
              </div>

              <div class="box">
                <input class="input2"></input>
                <img class="height-icon" alt="" src={height}></img>
              </div>

              <div class="box">
                <input class="input2"></input>
                <img class="login-box-child1" alt="" src={weight}></img>
              </div>
            </div>{" "}
            <div class="sign-in">
              <div class="sign-in-child"></div>
              <b class="sign-up" type="submit">
                sign up
              </b>
            </div>
          </form>

          <b class="already-have-an-container">
            <span class="already-have-an-container1">
              <span>Already have an account? </span>
              <span class="login" onClick={handleLoginClick}>
                Login
              </span>
            </span>
          </b>
        </div>
      </div>
    </div>
  );
}

export default Register;
