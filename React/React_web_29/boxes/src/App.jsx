import { useState } from "react";
import Box from "./components/Box";
import BoxList from "./components/BoxList";
import "./App.css";
import randomHex from "./utils/randomHex";

function App() {
  return (
    <div className="app">
      <h1>JS DOM</h1>
      <button>More box</button>
      <p className="total">Total box: 3</p>
      <BoxList colors={["red", "green", "blue"]} />
    </div>
  );
}

export default App;
