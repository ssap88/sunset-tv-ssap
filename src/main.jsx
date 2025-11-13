import React from "react";
import { createRoot } from "react-dom/client";

function App() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "#000",
      color: "#fff",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "system-ui"
    }}>
      <h1>Sunset TV - Próximamente</h1>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
