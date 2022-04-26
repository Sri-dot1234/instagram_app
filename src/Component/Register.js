import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Register = (props) => {
  const navigate = useNavigate();
  const Login = () => {
    navigate("/");
  };
  const BASE_URL =
    "https://react-demo-b16bf-default-rtdb.firebaseio.com/Register.json";
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");

  const signUp = (event) => {
    event?.preventDefault();
    const json_object = {
      username: username,
      email: email,
      password: password,
    };
    if (
      json_object.username.length > 0 &&
      json_object.email.length > 0 &&
      json_object.password.length > 0
    ) {
      axios
        .post(BASE_URL, json_object)
        .then((response) => console.log(response));
      navigate("/");
      alert("your are successfully registered");
    console.log("data");
      setEmail("");
      setPassword("");
      setUsername("");
    } else {
      alert("please enter the required feilds");
    }
  };

  return (
    <div>
      <div
        className="card shadow-lg p-3 mt-5 bg-white rounded"
        style={{ width: "600px" }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu6PhpPqKEgJiR9logFw23Cs4ttVxdV4ZVZkyDEc2LdtPdjx9M_Z9-yfuEexKcZeoqH5s&usqp=CAU"
          alt=""
          className="center"
        />
        <div className="card-body">
          <form>
            <div className="form-group row">
              <label for="company" className="col-sm-4 col-form-label">
                username:
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  className="form-control"
                  name="username"
                  placeholder="username"
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="email" className="col-sm-4 col-form-label">
                email:
              </label>
              <div className="col-sm-8">
                <input
                  type="email"
                  className="form-control"
                  name="email"
                  placeholder="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label for="password" className="col-sm-4 col-form-label">
                password:
              </label>
              <div class="col-sm-8">
                <input
                  type="password"
                  className="form-control"
                  name="password"
                  placeholder="password"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
            <button type="button" onClick={signUp} className="btn btn-secondary">
              signUp
            </button>
          </form>
        </div>
        <div className="card-footer">
          <h5>
            Have you an account?
            <span onClick={Login} className="text-info">
              Login
            </span>
          </h5>
        </div>
      </div>

      {/* <Data password1={username} username1={username}/> */}
    </div>
  );
};
