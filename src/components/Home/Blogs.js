import React from "react";
import Header from "../utils/Header";
import Coding from "./BlogList/Coding";

export default function Blogs() {
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
                <div className="col mx-auto py-5 custom-border">
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
  
                        <h2 className="text-green coding-font style-h2">
                            /blogs
                        </h2>
                        <p
                          className="text-white coding-font"
                          style={{ fontSize: "medium" }}
                        >Uploading soon</p>
                        {/* <p
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
                        </p> */}
                      </div>
                    </div>
                  </div>
  
                  {/* oter text  */}
                {/* oter text  */}
                <div className="coding-font text-white mt-2">
                  <h1 className="text-green">Here are my Blogs and thoughts</h1>
                  <blockquote class="blockquote">
                    <p class="mb-0">
                    If you are far away from yourself, how could you ever be close to another?
                    </p>
                    <footer class="blockquote-footer">
                      yung pueblo{" "}
                      {/* <cite title="Source Title">Source Title</cite> */}
                    </footer>
                  </blockquote>
                  <Coding/>
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
  