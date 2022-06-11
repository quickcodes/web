import React from "react";
import Header from "../utils/Header";

export default function AboutMe() {
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
              <div className="col p-0 pb-0">
                <h1 className="p-0 m-0 coding-font text-white">
                  <b>hi i'm dhruv</b>
                </h1>
                <p
                  className="text-white coding-font"
                  style={{ fontSize: "16px" }}
                >
                  Life is too short to argue, just say F@ck U and move on
                </p>
              </div>
              <div className="col mx-auto py-5">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-5"
                      style={{ minWidth: "300px" }}
                    >
                      {/* add image here  */}
                      <img src="images/1095.jpg" />
                    </div>
                    <div
                      className="col-7 pt-3"
                      style={{ minWidth: "300px" }}
                    >
                      {/* Text area  */}

                      <h2 className="start green coding-font style-h2">
                        What more do you wanna know about me?
                      </h2>
                      <p
                        className="text-white coding-font"
                        style={{ fontSize: "medium" }}
                      >
                        When someone asks{" "}
                        <span className="bg-color-custom">
                          Tell me about yourself?
                        </span>{" "}
                        It almost feels like someone allowed me to sing an old
                        song. Same lyrics with some variables in it.
                      </p>
                      <p className="text-white  coding-font"
                        style={{ fontSize: "medium" }}>
                        Maybe you are expecting somthing like - My name is
                        <span className="text-primary"> $FULL_NAME </span>I am
                        <span className="text-primary"> $PROFESSION </span>
                        and i live in
                        <span className="text-primary"> $CITY. </span>
                        But Putting variables in a shity old 90's line will not
                        define who you are right?
                      </p>
                    </div>
                  </div>
                </div>

                
                <p className="text-white  coding-font mt-2"
                        style={{ fontSize: "medium" }}>
                  What defines me is that i like to live a minimal life. where
                  no continous blotted &amp; shity notifications are comming to
                  my phone.
                </p>

                <p className="text-white  coding-font"
                        style={{ fontSize: "medium" }}>
                  To give you a quick overview of subjects this site features
                  now, or will feature in the future, here's a list of things I
                  am interested in -
                  <ul className="">
                    <li>Linux Stuffs.</li>
                    <li>Basic fundamentals of coding.</li>
                    <li>Web and App Developement.</li>
                    <li>Basics of DataBase.</li>
                  </ul>
                </p>
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}
