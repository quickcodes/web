import React from "react";
import Header from "../utils/Header";

export default function Home() {
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
            style={{ minWidth: "350px" }}
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
                  Life is too short to argue, just say F@ck Off and move on
                </p>
              </div>
              <div className="col mx-auto py-5 custom-border">
                <div className="container">
                  <div className="row">
                    <div
                      className="col-5 mr-2"
                      style={{ minWidth: "300px" }}
                    >
                      {/* add image here  */}
                      <img src="images/1227.jpg"/>
                    </div>
                    <div
                      className="col-7 pt-3"
                      style={{ minWidth: "300px" }}
                    >
                      {/* Text area  */}
                      <h2 className="start green coding-font style-h2">
                        /home
                      </h2>
                      <p
                        className="text-white coding-font"
                        style={{ fontSize: "medium" }}
                      >
                        I am <span className="bg-color-custom">Dhruv Soni</span>
                        , aka quickcodes. I am a 19 old guy from{" "}
                        <span className="bg-color-custom">India</span>, who
                        loves Computers and Softwares. I am also a Computer
                        Science Student and{" "}
                        <span className="bg-color-custom">using Linux</span>{" "}
                        Box.
                      </p>
                      <p
                        className="text-white coding-font"
                        style={{ fontSize: "medium" }}
                      >
                        This is a place where I show my interests, express my{" "}
                        <span className="bg-color-custom">thoughts</span>
                        &nbsp;and opinions on various topics with hopes of
                        improving my skills of putting them into writing. I
                        choose to build a website for this because of the{" "}
                        <span className="bg-color-custom">freedom</span> that a
                        personal webpage offers.
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
