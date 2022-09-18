import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";

function App2() {
  const [nameList1, setNameList1] = useState(false);
  useEffect(() => {
    avatar();
  }, [nameList1]);

  const avatar = async () => {
    const api = await axios.get("https://jsonplaceholder.typicode.com/posts");
    console.log(api);
  };

  const xx = () => {
    setNameList1(!nameList1);
  };

  return (
    <div>
      <button onClick={xx}>change</button>
    </div>
  );
}

export default App2;
