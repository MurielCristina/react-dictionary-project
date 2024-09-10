import React from "react";

export default function Example(props) {
  if (props.example) {
    return (
      <div className="Example">
        <span>Example: {props.example}</span>
      </div>
    );
  } else {
    return null;
  }
}
