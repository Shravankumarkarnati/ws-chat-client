import React, { useContext, useState } from "react";
import "./app.css";
import Layout from "./components/layout/layout.components";
import AppContext, { IAppContext } from "./Model/context";

function App() {
  const context = useContext(AppContext);
  const [state, setState] = useState(context);
  const changeContext = (newContext: IAppContext) => {
    setState(newContext);
  };
  return (
    <AppContext.Provider value={{ ...state, changeContext }}>
      <div className="App font-inter container h-full mx-auto py-2 px-2  md:p-11">
        <Layout />
      </div>
    </AppContext.Provider>
  );
}

export default App;
