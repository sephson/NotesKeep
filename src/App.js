import "./App.css";
import React, { useState } from "react";
import Topbar from "./component/Topbar";
import Form from "./component/Form";

function App() {
  const [click, setClick] = useState(false);
  const [notelist, setNotelist] = useState([]);

  return (
    <div className="App">
      <Topbar click={click} setClick={setClick} />
      <Form notelist={notelist} setNotelist={setNotelist} />
    </div>
  );
}

export default App;
