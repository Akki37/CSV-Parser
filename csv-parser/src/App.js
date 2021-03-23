import React from "react"
import './App.css';
import FileUpload from "./FileUpload";

function App(props) {
  return (
    <div className="App">
      <div id="heading_top">CSV P<span>arser</span></div>
       <FileUpload/>
    </div>
  );
}

export default App;
