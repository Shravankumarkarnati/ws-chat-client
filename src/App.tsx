import React from "react";
import openSocket from "socket.io-client";
import "./app.css";
import Layout from "./components/layout/layout.components";

export const socket = openSocket(process.env.REACT_APP_SOCKET_URL as string);

function App() {
  return (
    <div
      className="App font-inter w-full h-full  
                    p-0 lg:p-16 absolute z-20"
    >
      <Layout />
    </div>
  );
}

export default App;
