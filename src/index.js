import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// Components
// import UserProfile from "./components/UserProfile";
import App from "./App";

import reportWebVitals from "./reportWebVitals";
import Clock from "./components/Clock";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ backgroundColor: "#005580", height: "1000px" }}>
    <React.StrictMode>
      <h1>Welcome! Millen</h1>
      {/* <UserProfile title="Millen" /> */}
      <App />
      <Clock />
    </React.StrictMode>
  </div>
);

reportWebVitals();
