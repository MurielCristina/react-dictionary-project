import React, { useState } from "react";

import axios from "axios";
import Results from "./Results";
import Photos from "./Photos";

import "./Dictionary.css";

export default function Dictionary() {
  const [keyWord, setKeyWord] = useState("");
  const [results, setResults] = useState(null);
  const [images, setImages] = useState(null);

  function handleResponse(response) {
    setResults(response.data);
  }
  function handleImageResponse(response) {
    console.log(response);
    setImages(response.data);
  }

  function search(event) {
    event.preventDefault();

    let apiKey = "73050fa355794447f81ab5349190dotd";
    let apiUrl = `https://api.shecodes.io/dictionary/v1/define?word=${keyWord}&key=${apiKey}`;
    axios.get(apiUrl).then(handleResponse);

    let imageApiUrl = `https://api.shecodes.io/images/v1/search?query=${keyWord}&key=${apiKey}}`;
    let tokenStr = { apiKey };
    axios
      .get(imageApiUrl, {
        headers: { Authorization: `Bearer ${tokenStr}` },
      })
      .then(handleImageResponse);
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
      <Results results={results} />
      <Photos photos={images} />
    </div>
  );
}
