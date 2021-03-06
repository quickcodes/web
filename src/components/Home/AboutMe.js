import React from "react";
import Header from "../utils/Header";
import HeaderIntro from "../HeaderIntro";

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
              <HeaderIntro/>
              <div className="col mx-auto py-5 custom-border">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-5"
                      style={{ minWidth: "300px" }}
                    >
                      {/* add image here  */}
                      <img src="images/1192.jpg" />
                    </div>
                    <div
                      className="col-7 pt-3"
                      style={{ minWidth: "300px" }}
                    >
                      {/* Text area  */}

                      <h2 className="text-green coding-font style-h2">
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

                
                <p className="text-green  coding-font mt-2"
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
                    <li>Self help Books And Quotes.</li>
                    <li>Blogs.</li>
                    <li>If you have another cool idea contact me <span className="text-green">dhruvcodes7220@gmail.com</span>.</li>
                    <li>You can also donate!</li>
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
