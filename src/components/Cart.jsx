import React from "react";
import CartItem from "./CartItem";
import CartTotal from "./CartTotal";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Cart() {
  const cartArray = useSelector((state) => state.cartArray);

  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid px-4 px-lg-5">
          <Link to="/">
            <button className="btn btn-outline-dark">Home</button>
          </Link>
        </div>
      </nav>
      <hr></hr>
      <div className="container-fluid mt-2 ms-2 me-2">
        {cartArray.map((item) => (
          <CartItem key={item.id} item={item} />
        ))}
        <CartTotal />
      </div>
    </div>
  );
}

export default Cart;
