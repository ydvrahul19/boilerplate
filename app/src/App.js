import React, { useRef } from "react";
import "./App.css";

function App() {
  const inputRef = useRef(null);

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <div className="container">
      <h1>React App</h1>
      <input id="inp" type="text" placeholder="Your input goes here..." ref={inputRef} />
      <button id="btn"  onClick={handleClick}>Focus Input</button>
    </div>
  );
}

export default App;
