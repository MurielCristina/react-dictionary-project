import React from "react";
import Phonetic from "./Phonetic";
import Meaning from "./Meaning";

import "./Results.css";

export default function Reasults(props) {
  console.log(props.results);
  if (props.results) {
    return (
      <div className="Results">
        <Phonetic word={props.results} />
        <ol>
          {props.results.meanings.map(function (meaning, index) {
            return (
              <li key={index}>
                <Meaning meaning={meaning} />
              </li>
            );
          })}
        </ol>
      </div>
    );
  } else {
    return null;
  }
}
