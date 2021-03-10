import React from "react";
import './App.css';
import Details from "./Details";

function App() {
  return (
    <div className="App">
      <Details 
        data={'this is props'}
      />
    </div>
  );
}

export default App;
