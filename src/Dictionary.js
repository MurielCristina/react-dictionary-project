import React, { useState } from "react";

import "./Dictionary.css";

export default function Dictionary() {
  const [word, setWord] = useState(null);
  function search(event) {
    event.preventDefault();
    alert(`Searching for: ${word}`);
  }

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
