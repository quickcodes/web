import React from "react";
import Header from "../../utils/Header";
import HeaderIntro from "../../HeaderIntro";
// import Coding from "./BlogList/Coding";

export default function CantHurtMe() {
  return (
    <div className="mb-3">
      <span
        className="custom-border p-2 my-2 mx-1"
        style={{ fontSize: "large" }}
      >
        <a href="#/books-quotes/attitude-is-everything">
          /attitude-is-everything
        </a>
      </span>
      <span
        className="custom-border p-2 my-2 mx-1"
        style={{ fontSize: "large" }}
      >
        <a href="#/books-quotes/do-epic-shit">/do-epic-shit</a>
      </span>
      <span
        className="custom-border p-2 my-2 mx-1"
        style={{ fontSize: "large" }}
      >
        <a href="#/books-quotes/cant-hurt-me">/cant-hurt-me</a>
      </span>
    </div>
  );
}
