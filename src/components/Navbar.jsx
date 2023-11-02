import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid px-5">
        <a className="navbar-brand" href="#!">
          Mobile Store
        </a>
        <form className="d-flex">
          <Link to="/Cart">
            <button className="btn btn-outline-dark" type="submit">
              <i className="bi-cart-fill me-1"></i>
              Cart
              <span className="badge bg-dark text-white ms-1 rounded-pill">
                {cart}
              </span>
            </button>
          </Link>
        </form>
      </div>
    </nav>
  );
}

export default Navbar;
