import React from "react";
import Header from "../utils/Header";
import HeaderIntro from "../HeaderIntro";

export default function UpcomingStuff() {
  return (
    <div>
      <div className="container mt-5 ml-5 mr-5">
        <div className="row">
          <div
            className="col-3 w-30 p-3 my-5"
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
          {/* Body area  */}
          <div
            className="col-9"
            style={{ minWidth: "400px" }}
          >
            {/* -------------------------------------------------------------------- */}
            <div className="container">
              <HeaderIntro/>
              <div className="col mx-auto py-5 custom-border">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-5"
                      style={{ minWidth: "300px" }}
                    >
                      {/* add image here  */}
                      <img src="images/1167.jpg" />
                    </div>
                    <div
                      className="col-7 pt-3"
                      style={{ minWidth: "300px" }}
                    >
                      {/* Text area  */}

                      <p className="text-white  coding-font"
                        style={{ fontSize: "medium" }}>
                          <span className="h2 text-green">Upcoming stuffs</span>
                  <ul className="">
                    <li>Linux Stuffs.</li>
                    <li>Basic fundamentals of coding.</li>
                    <li>Web and App Developement.</li>
                    <li>Basics of DataBase.</li>
                    {/* <li>Self help Books And Quotes.</li> */}
                    {/* <li>Blogs.</li> */}
                    <li>If you have another cool idea contact me <span className="text-green">dhruvcodes7220@gmail.com</span>.</li>
                  </ul>
                </p>
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
