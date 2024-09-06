import React, { useState } from "react";

import axios from "axios";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");

  function handleResponse(response) {
    console.log(response.data.meanings[0]);
  }

  function search(event) {
    event.preventDefault();
    alert(`Searching for ${keyWord} definition`);

    let apiKey = "73050fa355794447f81ab5349190dotd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);
  }

  function handleKeyWordChange(event) {
    setKeyWord(event.target.value);
  }

  return (
    <div className="Dictionary">
      <h1>Dictionary</h1>
      <form onSubmit={search}>
        <input
          type="search"
          onChange={handleKeyWordChange}
          placeholder="🔍 Search"
        />
      </form>
    </div>
  );
}
