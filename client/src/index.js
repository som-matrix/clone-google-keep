import React from "react";
import ReactDOM from "react-dom";
import "./styles/index.css";
import { rootReducer } from "./reducer";
import { Provider } from "react-redux";
import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
const store = createStore(rootReducer, compose(applyMiddleware(thunk)));
ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
