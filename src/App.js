// src/App.js
import React, { useState } from "react";
import Data from "./Component/data";
import List from "./Component/list";
import "./index.css";

function App() {
  const [people, setPeople] = useState(Data);

  return (
    <div className="container">
      <h3>{people.length} Students</h3>
      <List people={people} />
      <button onClick={() => setPeople([])}>Clear All</button>
      
    </div>
  );
}

export default App;
