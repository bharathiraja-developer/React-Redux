import React from "react";
import Star from "./Star";
import Button from "./Button";

function Products({ mobile }) {
  return (
    <div className="col mb-5">
      <div className="card h-100">
        <img
          className="card-img-top"
          style={{ height: "40%", objectFit: "fill" }}
          src={mobile.thumbnail}
          alt="..."
        />

        <div className="card-body p-4">
          <div className="text-center">
            <h5 className="fw-bolder">{mobile.title}</h5>
            <Star rating={mobile.rating} />${mobile.price}
          </div>
        </div>

        <Button mobile={mobile} />
      </div>
    </div>
  );
}

export default Products;
