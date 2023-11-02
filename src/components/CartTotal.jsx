import React from "react";
import { useSelector } from "react-redux";

function CartTotal() {
  const Total = useSelector((state) => state.total);
  return (
    <div>
      <div className="container-fluid mt-2 ms-2 me-2">
        <div className="row mb-2">
          <div className="col-6 d-flex justify-content-start opacity-50">
            Subtotal :
          </div>
          <div className="col-6 d-flex justify-content-end pe-4">$ {Total}</div>
        </div>
        <div className="row mb-2">
          <div className="col-6 d-flex justify-content-start opacity-50">
            Shipping :
          </div>
          <div className="col-6 d-flex justify-content-end pe-4">
            {Total > 0 ? "Free" : "---"}
          </div>
        </div>
        <hr></hr>
        <div className="row mb-2">
          <div className="col-6 d-flex justify-content-start fw-medium">
            Total :
          </div>
          <div className="col-6">
            <p className="d-flex justify-content-end pe-4">$ {Total}</p>
            <p className="d-flex justify-content-end pe-4 text-danger">
              Get Daily Cash Nepsola Card
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartTotal;
