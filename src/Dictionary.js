import React, { useState } from "react";

import axios from "axios";
import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);

  function handleResponse(response) {
    console.log(response.data);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for: ${word}`);
  }

  let apiKey = "73050fa355794447f81ab5349190dotd";
  let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${word}&key=${apiKey}`;
  axios.get(apiUrl).then(handleResponse);

  return (
    <div className="Dictionary">
      <form onSubmit={search}>
        <input
          type="search"
          autoFocus={true}
          onChange={(event) => setWord(event.target.value)}
        />
      </form>
    </div>
  );
}
