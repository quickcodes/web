import React from "react";
import HeaderIntro from "../HeaderIntro";
import Header from "../utils/Header";

export default function AboutWeb() {
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
                      <img src="images/1169.jpg" />
                    </div>
                    <div
                      className="col-7 pt-3"
                      style={{ minWidth: "300px" }}
                    >
                      {/* Text area  */}

                      <h2 className="text-green coding-font style-h2">
                        /about-web
                      </h2>
                      <p
                        className="text-white coding-font"
                        style={{ fontSize: "medium" }}
                      >
                        In our century most of the websites are ugly But not by
                        there UI, look, animations, etc. They are ugly by there
                        adds, trackers, blotwares, etc. which cost you almost
                        5MB - 30MB and took 5-10 seconds to load a web page.
                      </p>
                      {/* <p className="text-white  coding-font"
                          style={{ fontSize: "medium" }}>
                           which cost you almost 5MB -
                        30MB and took 5-10 seconds to load a web page.
                        </p> */}
                    </div>
                  </div>
                </div>

                {/* oter text  */}
                <p
                  className="text-white  coding-font mt-2"
                  style={{ fontSize: "medium" }}
                >
                  Now you must say we have super fast processors and high speed
                  bandwidth we don't care about it anymore. But here is the
                  catch that the core/main/relevant content of the websites is
                  costing less then 1MB and took less than 1 second to load. So
                  Where the remamining data and time gone? Yes, You are right!
                  The remaining data is eated by those adds, trackers,
                  javascripts, blotwares, etc. Which are even not necessary for
                  the web.
                </p>

                <p
                  className="text-white  coding-font"
                  style={{ fontSize: "medium" }}
                >
                  If you are searching for a recipe on internet and you found 2
                  Websites there. First one is eye catchy, Beautiful, loaded
                  with adds, trackers, junk. and the other one is simple,
                  intractive, fast, and just provide you a recipe. You will
                  definately gonna choose the second one. right?
                </p>
                <h2 className="coding-font text-green">
                  Still think it is ugly? <a href="#/bad-words">click Here</a>
                </h2>
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}
