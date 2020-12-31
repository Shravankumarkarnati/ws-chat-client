import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import BackgroundLayout from "./components/BackgroundLayout/BackgroundLayout.component";
import "./index.css";
import store from "./redux/store";

// ReactDOM.render(
//   <React.StrictMode>
//     <Provider store={store}>
//       <App />
//     </Provider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

const render = () => {
  const App = require("./App").default;

  ReactDOM.render(
    <React.StrictMode>
      <Provider store={store}>
        <BackgroundLayout />
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

// "start": "react-scripts start",
// "build": "react-scripts build",
// "test": "react-scripts test",
