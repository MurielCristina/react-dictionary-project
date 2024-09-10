import React from "react";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <span>SYNONYMS</span>
        <ul>
          {props.synonyms.map(function (synonyms, index) {
            return (
              <li className="Synonyms" key={index}>
                {synonyms}
              </li>
            );
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
