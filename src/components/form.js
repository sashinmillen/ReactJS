import React from "react";

function Form() {
  return (
    <div>
      <h1>Welcome to My Form Handling Lessong Serias</h1>
      <form method="POST">
        <div>
          <input type="text" name="firstName" placeholder="Your Name" />
        </div>

        <div>
          <input type="tel" name="number" placeholder="Contact Number" />
        </div>
        <div>
          <input type="checkbox" name="areUOK" />
          <button type="submit" value="Submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
