import React from "react";

function BlinkingDot() {
  return (
    <div className="blinking-dot-container">
      <span className="blinking-dot"></span>
      <span style={{ color: "#00ff00", fontSize: "0.9em" }}>Available for hire</span>
    </div>
  );
}

export default BlinkingDot;
