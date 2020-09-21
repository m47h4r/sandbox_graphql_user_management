import React from "react";
import GetAllUsers from "./components/GetAllUsers";
import GetUserByEmail from "./components/GetUserByEmail";
import "./App.css";

function App() {
  return (
    <div className="container">
      <GetAllUsers />
      <GetUserByEmail />
    </div>
  );
}

export default App;
