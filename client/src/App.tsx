import React from "react";
import Canvas from "./components/Canvas";
import SettingBar from "./components/SettingBar";
import Toolbar from "./components/Toolbar";

function App() {
  return (
    <div className="App">
      <Toolbar />
      <SettingBar />
      <Canvas />
    </div>
  );
}

export default App;
