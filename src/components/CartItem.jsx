import React, { useState } from "react";
import { mobiles } from "./AllProducts";
import { useDispatch } from "react-redux";
import { decHandle, reTotalHandle } from "../reducer/shoppingReducer";

function CartItem({ item }) {
  const dispatch = useDispatch();

  const perPrice = item.price;
  const [perTotal, setPerTotal] = useState(perPrice);
  return (
    <div className="row">
      <div className="col-3 d-flex justify-content-start">
        <img
          style={{ width: "100%", height: "100%", objectFit: "fill" }}
          src={item.thumbnail}
        ></img>
      </div>
      <div className="col-4 d-flex justify-content-start">
        <div>
          <h4 className="ms-2">{item.title}</h4>
          <p className="ms-2">{item.description}</p>
        </div>
      </div>
      <div className="col-5">
        <p className="d-flex justify-content-end pe-4 mt-4">
          Price : $ {item.price}
        </p>

        <div className="d-flex justify-content-end pe-4">
          <select
            onChange={(e) => {
              setPerTotal(e.target.value * perPrice);
              dispatch(reTotalHandle(item.id, e.target.value));
            }}
            defaultValue="1"
            className="form-select text-center p-0 me-2"
            size="1"
            style={{ width: "70px", height: "30px" }}
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
            <option value="6">6</option>
            <option value="7">7</option>
            <option value="8">8</option>
            <option value="9">9</option>
            <option value="10">10</option>
          </select>
          <p>$ {perTotal}</p>
        </div>
        <div className="d-flex justify-content-end pe-4 mt-4">
          <button
            id={item.id}
            className="text-danger btn"
            onClick={(e) => {
              dispatch(decHandle(e.target.id));
              dispatch(reTotalHandle(0, item.id));
              mobiles[e.target.id - 1].state = true;
            }}
          >
            Remove
          </button>
        </div>
      </div>
      <hr className="mt-3"></hr>
    </div>
  );
}

export default CartItem;
