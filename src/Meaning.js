import React from "react";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <p>
        <strong>{props.meaning.partOfSpeech}.</strong>{" "}
        {props.meaning.definition} <br />
        <em>Example: {props.meaning.example}</em>
        <Synonyms synonyms={props.meaning.synonyms} />
      </p>
    </div>
  );
}
