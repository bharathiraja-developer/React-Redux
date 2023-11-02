import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { ValueContext } from "./Products";
import { mobiles } from "./AllProducts";
import { useDispatch, useSelector } from "react-redux";
import { decHandle, incHandle } from "../reducer/shoppingReducer";

function Button() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const array = useContext(ValueContext);
  let id = array.id;
  const [state, setState] = useState(array.state);
  const increment = (e) => {
    dispatch(incHandle(array));
    mobiles[e.target.id - 1].state = false;
    setState(false);
  };
  const decrement = (e) => {
    dispatch(decHandle(e.target.id));
    mobiles[e.target.id - 1].state = true;
    setState(true);
  };
  if (state) {
    return (
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a
            id={id}
            onClick={increment}
            className="btn btn-outline-dark mt-auto"
          >
            Add to cart
          </a>
        </div>
      </div>
    );
  } else {
    return (
      <div className="card-footer p-4 pt-0 border-top-0 bg-transparent">
        <div className="text-center">
          <a
            id={id}
            onClick={decrement}
            className="btn btn-outline-dark mt-auto"
          >
            Remove from cart
          </a>
          <br></br>
          <Link to="/Cart">
            <button className="btn btn-outline-dark mt-2" type="submit">
              Go to Cart
            </button>
          </Link>
        </div>
      </div>
    );
  }
}

export default Button;
