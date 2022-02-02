import React from "react";
import './App.css';
import Navbar from './Navbar';
import Sidebar from "./Sidebar1";
import Feed from "./Feed";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="AppBody">
      <Sidebar/>
      <Feed/>
      {/* news */}
      </div>
    </div>
  );
}

export default App;
