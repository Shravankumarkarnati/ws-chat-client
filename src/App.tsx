import React, { useContext, useState } from "react";
import "./app.css";
import Layout from "./components/layout/layout.components";
import AppContext, { IAppContext } from "./Model/context";
import openSocket from "socket.io-client";

export const socket = openSocket(process.env.REACT_APP_SOCKET_URL as string);

function App() {
  const context = useContext(AppContext);
  const [state, setState] = useState(context);
  const changeContext = (newContext: IAppContext) => {
    setState(newContext);
  };
  return (
    <AppContext.Provider value={{ ...state, changeContext }}>
      <div
        className="App font-inter w-full h-full  
                    p-0 lg:p-16 absolute z-20"
      >
        <Layout />
      </div>
    </AppContext.Provider>
  );
}

export default App;
