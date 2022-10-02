import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

/* Importing the App component from the App.js file. */
import App2 from "./App2"; // import App from './App';
import Form from "./components/form";

import reportWebVitals from "./reportWebVitals";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <div style={{ backgroundColor: "#005580", height: "1000px" }}>
    <React.StrictMode>
      {/* <App /> */}
      <App2 />
      <Form />
    </React.StrictMode>
  </div>
);

reportWebVitals();
