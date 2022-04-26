import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
//import { BrowserRouter as Link } from "react-router-dom"
export const Login = (props) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [array, setarray] = useState([]);
  const BASE_URL =
    "https://react-demo-b16bf-default-rtdb.firebaseio.com/Register.json";

  const Forget = () => {
    navigate("/Forgot");
  };
  const logout = () => {
    alert("are you sure to logout");
    localStorage.clear();
    window.location.href = "/";
  };
  const Signup = () => {};
  const login = (event) => {
    event?.preventDefault();
    axios
      .get(BASE_URL)
      .then((response) => setarray(Object.values(response.data)));
    for (let i of array) {
     localStorage.setItem("login", (i.username));
      if (i.username === username && i.password === password) {
        navigate("/Home");
        alert("user login success");
        break;
      }
    }
  };
  return (
    <div className="mt-5">
      {" "}
      <div
        className="card shadow-lg p-3 mb-5 bg-white rounded"
        style={{ width: "500px" }}
      >
        <img
          src="https://thumbs.dreamstime.com/b/login-icon-button-vector-illustration-isolated-white-background-127000574.jpg"
          alt=""
          className="center"
        />
        {/* <h3 className="text-center">login</h3> */}
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label for="username" className="col-sm-4 col-form-label">
                username
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  id="username"
                  placeholder="username"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="password" className="col-sm-4 col-form-label">
                password
              </label>
              <div className="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  name=" password"
                  id="password"
                  placeholder="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <div className="row">
              <p onClick={Forget} className="text-primary m-2">
                Forgot password
              </p>
              <button className=" offset-md-6 btn btn-info" onClick={login}>
                login
              </button>
            </div>
            {/* <Link className="nav-link" to={"/Forgot"}>
                  Forgot Password
                </Link> */}
          </form>
        </div>

        <div className="card-footer">
          <p>
            If you dont have account?
            <span onClick={Signup} className="text-primary m-2">
              Signup
            </span>
          </p>
          <p className="text-info float-right mb-1" onClick={logout}>
            Logout
          </p>
        </div>
      </div>
    </div>
  );
};
