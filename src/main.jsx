import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { cartValueHandler } from "./reducer/shoppingReducer.jsx";

const store = createStore(cartValueHandler);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <App />
  </Provider>
);
