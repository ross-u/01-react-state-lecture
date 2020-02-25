import React from "react";

function User(props) {
  return (
    // <div style="background-color: red">
    <div style={{ backgroundColor: props.theColor }}>
      <h2> {props.firstName} </h2>
      <img src={props.image} alt="" width="250" height="250" />
    </div>
  );
}

export default User;
