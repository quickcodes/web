import React from "react";
import Header from "../utils/Header";
import HeaderIntro from "../HeaderIntro";
import Coding from "./BlogList/Coding";
import BlogRoutes from "./BlogList/BlogRoutes"

export default function Blogs() {
  return (
    <div>
      <div className="container mt-5 ml-5 mr-5">
        <div className="row">
          <div className="col-3 w-30 p-3 my-5" style={{ minWidth: "250px" }}>
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
          <div className="col-9" style={{ minWidth: "400px" }}>
            {/* -------------------------------------------------------------------- */}
            <div className="container">
              <HeaderIntro />
              <div className="col mx-auto py-5 custom-border">
                <div className="container">
                  <div className="row">
                    <div className="col-5" style={{ minWidth: "300px" }}>
                      {/* add image here  */}
                      <img src="images/1095.jpg" />
                    </div>
                    <div className="col-7 pt-3 coding-font" style={{ minWidth: "300px" }}>
                      {/* Text area  */}

                      <h2 className="text-green style-h2">
                        /blogs
                      </h2>
                      <div style={{ fontSize: "large" }}>
                        <p>Here are my blogs</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* oter text  */}
                {/* oter text  */}
                <div className="coding-font text-white mt-2">
                  <h1 className="text-green">Blogs and thoughts</h1>
                  <blockquote class="blockquote">
                    <p class="mb-0">
                      If you are far away from yourself, how could you ever be
                      close to another?
                    </p>
                    <footer class="blockquote-footer">yung pueblo </footer>
                  </blockquote>

                  <BlogRoutes />

                  {/* <span
                    className="custom-border p-2 my-2 mx-1"
                    style={{ fontSize: "large" }}
                  >
                    <a href="#/blogs/coding">/coding</a>
                  </span>
                  <span
                    className="custom-border p-2 my-2 mx-1"
                    style={{ fontSize: "large" }}
                  >
                    <a href="#/blogs/linux">/linux</a>
                  </span> */}

                  {/* <div className="my-1">
                    <div className="custom-border p-2">
                      <h3>
                        Coding <span className="h6 text-green">Scares me alot</span>
                      </h3>
                      <div style={{ fontSize: "medium" }}>
                        <p>
                          <span className="bg-color-custom">I got scared</span>{" "}
                          when i have to code something unknown,
                          <span className="bg-color-custom">
                            I got scared
                          </span>{" "}
                          when no one is coding in that language which is
                          assigned to me,
                          <span className="bg-color-custom">
                            I got scared
                          </span>{" "}
                          when i get list of m0th€rf@king bugs in my project,
                          and{" "}
                          <span className="bg-color-custom">
                            don't know hove to solve them
                          </span>
                          , And the greatest thing is that no one around my
                          local scope is coding that thing.{" "}
                          <span className="bg-color-custom">
                            So i have to figure out the solution alone in any
                            condition
                          </span>{" "}
                          otherwise i'm gonna fired. I got scared...
                        </p>
                        <p>
                          But each time i find the right solution, the pleasure
                          it gives me insane, Fixing bugs{" "}
                          <span className="bg-color-custom">
                            increases circulation of blood in my vains
                          </span>
                          , When i read documentation, scrape the internet and
                          fix things{" "}
                          <span className="bg-color-custom">
                            it puts my confidence to f@king another level.
                          </span>
                        </p>
                      </div>
                    </div>
                  </div> */}
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
