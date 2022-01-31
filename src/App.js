import React from "react";
import './App.css';
import Navbar from './Navbar';
import Sidebar from "./Sidebar1";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <div className="AppBody">
      <Sidebar/>
      {/* sidebar
      feed
      news */}
      </div>
    </div>
  );
}

export default App;
