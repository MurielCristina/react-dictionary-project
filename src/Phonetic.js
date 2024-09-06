import React from "react";

export default function Phonetic(props) {
  return (
    <div className="Phonetic">
      <h2>{props.word.word}</h2>
      <em className="phonetic">{props.word.phonetic}</em>
    </div>
  );
}
