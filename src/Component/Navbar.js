import React from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { Forgot } from "./Forgot";
import { Home } from "./Home";
import { Login } from "./Login";
//import { Logout } from "./Logout";
import { Register } from "./Register";
import Search from "./Search";
export const Navbar = () => {
  const user = localStorage.getItem("login");
  
 // console.log(user);
  return (
    <div>
      {" "}
      <Router>
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav  ">
              <li className="nav-item active  ">
                <Link className="nav-link  " to={"/Home"} disabled>
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQTofBm7QGOKT0vXXV6xqEmYdyrhUM8yUzniw&usqp=CAU"
                    width="40"
                    alt="insta" 
                  /> {user}
                </Link>
              </li>
              <li className="nav-item" id="dsd">
                <Link className="nav-link" to={"/Search"}>
                <i className="fa fa-search" aria-hidden="true"></i>
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to={"/"}>
                  Login
                </Link>
              </li>

              <li className="nav-item ">
                <Link className="nav-link" to={"/Register"}>
                  signUp
                </Link>
               
              </li>
            </ul>
          </div>
        </nav>

        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/" element={<Login />} />
          <Route path="/Search" element={<Search />} />
          <Route path="/Forgot" element={<Forgot />} />
          <Route path="/Register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};
