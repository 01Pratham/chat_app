import React, { useState } from "react";
import axios from "axios";
import OverlayPanel from "../components/overlayPanel";
import { useNavigate } from "react-router-dom";
import CSSLoader from "../scripts/CSSLoader";

const Login = () => {
  CSSLoader("assets/css/login.css");
  const navigate = useNavigate();

  const [containerClass, setContainerClass] = useState("");

  const loginAuth = async (data) => {
    if (data.email && data.password) {
      try {
        const result = await axios.post(
          "http://localhost:8000/api/user/login",
          {
            email: data.email,
            password: data.password,
          }
        );

        if (result.data.status) {
          navigate("/Dashboard");
        } else {
          console.log(result.data.message);
        }
      } catch (error) {
        console.error("Login failed", error);
      }
    } else {
      console.error("Please fill required inputs");
    }
  };

  const registerUser = async (data) => {
    if (data.name && data.email && data.password) {
      try {
        const result = await axios.post(
          "http://localhost:8000/api/user/register",
          {
            email: data.email,
            password: data.password,
            name: data.name,
            pic: null,
          }
        );

        if (result.data.status) {
          navigate("/Dashboard");
        } else {
          console.log(result.data.message);
        }
      } catch (error) {
        console.error("Registration failed", error);
      }
    } else {
      console.error("Please fill required inputs");
    }
  };

  const handleSubmit = (event, id, func) => {
    event.preventDefault();
    const form = document.getElementById(id);
    const formData = new FormData(form);
    const data = {};

    for (let [key, val] of formData.entries()) {
      data[key] = val;
    }

    func(data);
  };

  return (
    <section className="Main">
      <div className={`main-container ${containerClass}`} id="container">
        <div className="form-container sign-up-container">
          <form
            id="createForm"
            onSubmit={(event) =>
              handleSubmit(event, "createForm", registerUser)
            }
          >
            <h3 className="card-head">Create Account</h3>
            <div className="social-container">
              {/* Uncomment and customize if you have social login */}
              {/* <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
            <span style={{ fontSize: "12px" }}>
              or use your email for registration
            </span>
            <input type="text" placeholder="Name" required name="name" />
            <input type="email" placeholder="Email" required name="email" />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
            />
            <button type="submit">Sign Up</button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form
            id="loginForm"
            onSubmit={(event) => handleSubmit(event, "loginForm", loginAuth)}
          >
            <h3 className="card-head">Sign in</h3>
            <div className="social-container">
              {/* Uncomment and customize if you have social login */}
              {/* <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a> */}
            </div>
            <span>or use your account</span>
            <input type="email" placeholder="Email" required name="email" />
            <input
              type="password"
              placeholder="Password"
              required
              name="password"
            />
            <a href="#">Forgot your password?</a>
            <button type="submit">Sign In</button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <OverlayPanel
              position="left"
              head="Welcome Back!"
              text="To keep connected with us please login with your personal info"
              button_id="signIn"
              button="Sign In"
              func_param=""
              func={setContainerClass}
            />
            <OverlayPanel
              position="right"
              head="Hello, Friend!"
              text="Enter your personal details and start your journey with us"
              button_id="signUp"
              button="Sign Up"
              func_param="right-panel-active"
              func={setContainerClass}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
