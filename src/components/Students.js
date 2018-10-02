import React from "react";

const message = "Hello!";

function Students(props) {
  return (
    <div>
      <h1>{props.student.name}</h1>
      <h2> Identity: {props.student.identity}</h2>
      <h2> Age: {props.student.age}</h2>
      <h2> Best Friend(s): {props.student.bestFriend}</h2>
    </div>
  );
}

export default Students;
