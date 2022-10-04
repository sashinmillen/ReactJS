import React from "react";

const Button = () => {
  const ButtonType = (props) => {
    let color = "";

    switch (props.type) {
      case "select":
        color = "green";
        break;
      case "Cancel":
        color = "red";
        break;
      case "OK":
        color = "blue";
        break;
      default:
        color = "";
    }

    return <button style={{ background: color }}>{props.text}</button>;
  };

  return (
    <>
      <h1>hellow thi is home page</h1>
      <ButtonType type="OK" text="OK" />
      <ButtonType type="Cancel" text="Cancel" />
      <ButtonType type="select" text="Select" />
    </>
  );
};

export default Button;
