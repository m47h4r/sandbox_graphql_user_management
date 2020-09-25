import React from "react";
import GetAllUsers from "./components/GetAllUsers";
import GetUserByEmail from "./components/GetUserByEmail";
import SetUser from "./components/SetUser";
import "./App.css";

function App() {
  return (
    <div className="container">
      <GetAllUsers />
      <GetUserByEmail />
      <SetUser />
    </div>
  );
}

export default App;
