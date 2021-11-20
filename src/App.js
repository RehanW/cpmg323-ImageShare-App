import React from "react";
import './App.css';
import Login from "./Pages/Login"
import Signup from "./Pages/Signup"
import Home from "./Pages/Home"
import Images from "./Pages/Images"

function App() {
  return (
    <div className="App">
      <Login />
      <Signup />
      <Home />
      <Images />
    </div>
  );
}

export default App;
