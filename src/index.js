import React from "react";
import ReactDOM from "react-dom";

import Students from "./components/Students";
import "./styles.css";

const students = [
  {
    name: "Harry Potter",
    identity: "The Chosen One",
    age: 11,
    bestFriend: "Ron Weasley and Hermione Granger"
  },

  {
    name: "Ron Weasley",
    identity: "Second Youngest Weasley, Harry's best friend",
    age: 11,
    bestFriend: "Harry Potter and Hermione Granger"
  },

  {
    name: "Hermione Granger",
    identity: "Smart McSmart pants, Harry's best friend",
    age: 11,
    bestFriend: "Harry Potter and Ron Weasley"
  },
  {
    name: "Draco Malfoy",
    identity: "Slick hair",
    age: 11,
    bestFriend: "Crabbe and Goyle"
  }
];

function App() {
  return (
    <div className="App">
      ;
      {students.map(pupil => {
        return <Students student={pupil} />;
      })}
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
