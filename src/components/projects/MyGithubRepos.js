import React from "react";
import Header from "../utils/Header";
import HeaderIntro from "../HeaderIntro";

export default function MyGithubRepos() {
  return (
    <div>
      <div className="container mt-5 ml-5 mr-5">
        <div className="row">
          <div
            className="col-3 border border-primary w-30 p-3 my-5"
            style={{ minWidth: "250px" }}
          >
            {/* -------------------------------------------------------------------- */}
            {/* -------------------------------------------------------------------- */}
            {/* -------------------------------------------------------------------- */}
            {/* -------------------------------------------------------------------- */}

            <Header />

            {/* -------------------------------------------------------------------- */}
            {/* -------------------------------------------------------------------- */}
            {/* -------------------------------------------------------------------- */}
            {/* -------------------------------------------------------------------- */}
          </div>
          <div
            className="col-9 border border-primary"
            style={{ minWidth: "400px" }}
          >

            {/* -------------------------------------------------------------------- */}
            <div className="container">
              <HeaderIntro/>
              <div className="col mx-auto border border-alert py-5">
                
              <div className="container">
                <div className="row">
                <div
                  className="col-3 border border-primary"
                  style={{ minWidth: "200px" }}
                >
                  {/* add image here  */}
                  <img src="https://bugswriter.com/pics/1167.jpg"/>
                </div>
                <div
                  className="col-9 border border-primary pt-3"
                >
                  {/* Text area  */}
                <p className="main-text coding-font h1">
                  Github section is under construction
                </p>
                {/* <p className="main-text coding-font">
                  This is a place where I show my interests, express my <span className="bg-color-custom">thoughts</span>
                  &nbsp;and opinions on various topics with hopes of improving my skills of putting them into writing. I choose to build a
                  website for this because of the <span className="bg-color-custom">freedom</span> that a personal webpage
                  offers.
                </p> */}
                </div>
                
                </div>
              </div>

              </div>
            </div>
            {/* -------------------------------------------------------------------- */}

          </div>
        </div>
      </div>
    </div>
  );
}
