import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Navbar() {
  const getLoggedInUser = () => {
    const loggedInUser = sessionStorage.getItem("loggedInUser");
    return loggedInUser ? JSON.parse(loggedInUser).name : "";
  };

  const handleLogout = () => {
    sessionStorage.removeItem("loggedInUser");
    alert("Log-out successful!");
    navigate("/login");
  };

  const navigate = useNavigate();

  const handleOpenModal = () => {
    navigate("/menu", { state: { showModal: true } });
  };

  const username = getLoggedInUser();

  const location = useLocation();
  const [isHome, setIsHome] = useState(true);
  const [isLogin, setIsLogin] = useState(true);
  const [isSignup, setIsSignup] = useState(true);

  useEffect(() => {
    setIsHome(location.pathname === "/");
    setIsLogin(location.pathname === "/login");
    setIsSignup(location.pathname === "/signup");
  }, [location]);

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const navbar = document.querySelector(".navbar");
      if (navbar && window.scrollY > 45) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`navbar navbar-expand-lg px-4 px-lg-5 py-3 py-lg-0 ${
        isSticky ? "sticky-top shadow-sm" : ""
      } ${isHome || isLogin || isSignup ? "navbar-dark" : "navbar-dark-1"}`}
    >
      <a
        href="#"
        className="navbar-brand p-0 d-flex align-items-center fw-bolder"
      ></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarCollapse"
      >
        =
      </button>
      <div className="collapse navbar-collapse" id="navbarCollapse">
        <ul className="navbar-nav me-auto py-0 pe-4">
          <li className="nav-item">
            <Link to="/" className="nav-link">
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-link">
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/about" className="nav-link">
              About Us
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/location" className="nav-link">
              Location
            </Link>
          </li>
        </ul>
        {username ? (
          <div className="d-flex justify-content-center align-items-center">
            <span className="text-white mx-1">Welcome, {username}</span>
            <Button variant="btn btn-danger mx-1" onClick={handleOpenModal}>
              Cart
            </Button>
            <button className="btn btn-danger mx-1" onClick={handleLogout}>
              Logout
            </button>
          </div>
        ) : (
          <div className="d-flex justify-content-center">
            <Link to="/login" className="btn btn-danger mx-1">
              Log-in
            </Link>
            <Link to="/signup" className="btn btn-danger mx-1">
              Sign-up
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
