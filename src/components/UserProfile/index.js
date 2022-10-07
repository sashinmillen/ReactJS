import React from "react";
import PropTypes from "prop-types";

function UserProfile(props) {
  const handleOnCliked = () => {
    props.onUpdateClicked("hello", 2121);
  };
  return (
    <div>
      <h1>{props.title}</h1>
      <h1>{props.address.city}</h1>
      <button onClick={handleOnCliked}>Updated</button>
    </div>
  );
}

UserProfile.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string,
  address: PropTypes.shape({
    zipCode: PropTypes.string.isRequired,
    city: "",
  }).isRequired,
  onUpdateClick: PropTypes.func,
};

export default UserProfile;
