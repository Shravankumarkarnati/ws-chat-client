import React from "react";
import openSocket from "socket.io-client";
import "./app.css";
import AppContainer from "./layout/AppContainer.layout";

export const socket = openSocket(process.env.REACT_APP_SOCKET_URL as string);

function App() {
  return (
    <div
      className="App font-inter text-kar-black w-full h-full  
                    p-0 lg:p-8 absolute z-20"
    >
      <AppContainer />
    </div>
  );
}

export default App;
