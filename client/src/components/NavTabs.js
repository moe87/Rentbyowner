import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function NavTabs() {

  var isUserLogin = localStorage.getItem("userInfo") == null ? false: true;

  return (
    <nav className="navbar navbar-dark bg-dark">
      <Link to="/" className="navbar-brand"><FontAwesomeIcon icon="home" /> RBO</Link>    
      <ul className="nav">
        {
          localStorage.getItem("userInfo") != null ?
            <li className="nav-item text-white"><span className="nav-link">Welcome {JSON.parse(localStorage.getItem("userInfo")).firstName} {JSON.parse(localStorage.getItem("userInfo")).lastName}</span></li>
          : <li/>
        }
        <li className="nav-item">
        {
          !isUserLogin ?
          <Link to="/login" className={window.location.pathname === "/login" ? "nav-link active text-white" : "nav-link text-white"}>
            <FontAwesomeIcon icon="sign-in-alt" /> Login
          </Link>
          :
          <Link to="/" className={window.location.pathname === "/logout" ? "nav-link active text-white" : "nav-link text-white"} onClick={()=>{
            localStorage.removeItem("userInfo"); this.props.history.push("/");
          }}>
            <FontAwesomeIcon icon="sign-out-alt" /> Logout
          </Link>
        }
        </li>

        {!isUserLogin ? 
          <Link to="/signup" className={window.location.pathname === "/signup" ? "nav-link active text-white" : "nav-link text-white"}>
            <FontAwesomeIcon icon="user-plus" /> Sign up
          </Link>
          : ""}
      </ul>
    </nav>
  );
}

export default NavTabs;
