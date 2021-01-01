import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import WrapperBg from "./layout/WrapperBg.layout";
import "./index.css";
import store from "./redux/store";

const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <WrapperBg />
        <App />
      </Provider>
    </React.StrictMode>,
    document.getElementById("root")
  );
};

render();

if (process.env.NODE_ENV === "development" && module.hot) {
  module.hot.accept("./App", render);
}
