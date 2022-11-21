import React from "react";
import toolState from "../store/toolState";
import "../styles/SettingBar.css";

const SettingBar = () => {
  return (
    <div className="SettingBar">
      <label htmlFor="line-width">Line width</label>
      <input
        onChange={(e) => toolState.setLineWidth(Number(e.target.value))}
        id="line-width"
        type="number"
        defaultValue={1}
        min={1}
        max={100}
      />
    </div>
  );
};

export default SettingBar;
