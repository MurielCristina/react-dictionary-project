import React from "react";
import Example from "./Example";
import Synonyms from "./Synonyms";

export default function Meaning(props) {
  return (
    <div className="Meaning">
      <div>
        <strong>{props.meaning.partOfSpeech}.</strong>{" "}
        {props.meaning.definition} <br />
        <Example example={props.meaning.example} />
        <Synonyms synonyms={props.meaning.synonyms} />
      </div>
    </div>
  );
}
