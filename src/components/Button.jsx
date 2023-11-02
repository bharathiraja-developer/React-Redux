import React, { useState } from "react";
import { Link } from "react-router-dom";
import { mobiles } from "./AllProducts";
import { useDispatch } from "react-redux";
import { decHandle, incHandle } from "../reducer/shoppingReducer";

function Button({ mobile }) {
  const dispatch = useDispatch();
  let id = mobile.id;
  const [state, setState] = useState(mobile.state);
  const increment = (e) => {
    dispatch(incHandle(mobile));
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
