import React from "react";
import Header from "../../utils/Header";
import HeaderIntro from "../../HeaderIntro";
import BlogRoutes from './BlogRoutes'

export default function Linux() {
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
                    <div
                      className="col-7 pt-3 coding-font"
                      style={{ minWidth: "300px" }}
                    >
                      {/* Text area  */}

                      <h2 className="text-green style-h2">/blogs</h2>

                      <div style={{ fontSize: "large" }}>
                        <p>linux is all about freedom</p>
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

                  <BlogRoutes/>

                  {/* 
                  <span
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

                  <div className="my-1">
                    <div className="custom-border p-2">
                      <h3>
                        Linux{" "}
                        <span className="h6 text-green">
                          4 hours passed and windows is still updating...
                        </span>
                      </h3>
                      <div style={{ fontSize: "medium" }}>
                        <p>
                          After Using Linux, as a daily driver operating system{" "}
                          <span className="bg-color-custom">
                            i learned alot about what our machines are actually
                            can do.
                          </span>{" "}
                          What Freedom linux offers is a lot of power to do
                          anything you want. customize it in any way you want.
                          People's are customizing there{" "}
                          <span className="bg-color-custom">
                            whole operating system
                          </span>{" "}
                          in f@king crazy manner. Wanna see{" "}
                          <a
                            target="_blank"
                            href="https://www.reddit.com/r/unixporn/"
                          >
                            click here
                          </a>
                          . I'll Bet after spending only 10 minuites watching
                          unixporn you{" "}
                          <span className="bg-color-custom">
                            definately gonna fall in love{" "}
                          </span>
                          with customization.
                        </p>
                        <p>
                          I also customized my Linux alot, I used various
                          distributions like ubuntu, kali linux{" "}
                          <span className="text-green">
                            (Noobs call it hacking distro)
                          </span>
                          , pop-os, and the{" "}
                          <span className="bg-color-custom">sexiest one Arch</span> and Inside arch Linux
                          i used varioud window managers like KDE plasma 5, gnome, etc...
                        </p>
                        <p>
                            
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
