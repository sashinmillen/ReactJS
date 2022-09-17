import React from "react";
import moment from "moment/moment";

const NameList = (props) => {
  return (
    <>
      <li>
        <p>
          <img src={props.avatar} />
          {props.name}
        </p>
        <p>Name: {props.name}</p>
        <p>City: {props.city}</p>
        <p>
          Birthday:{" "}
          {new Intl.DateTimeFormat("en-US").format(new Date(props.birthday))}
        </p>
        <p>Birthday-Type-2: {moment(props.birthday).format("DD-MM-YYYY")}</p>
        <p>E-mail: {props.email}</p>
      </li>
    </>
  );
};

export default NameList;
