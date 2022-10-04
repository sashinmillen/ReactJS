import "./App.css";
import React, { useEffect, useState } from "react";

//components
import UserProfile from "./components/UserProfile";

function App() {
  const [title, setTitle] = React.useState("Hello There");

  React.useEffect(() => {
    setTimeout(() => {
      setTitle("Your Time-Out");
    }, 5000);
  }, []);

  return (
    <>
      <UserProfile
        title={title}
        address={{ zipCode: "372728", city: "Colombo" }}
      />
    </>
  );
}

export default App;
