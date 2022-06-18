import React from "react";
import Header from "../../utils/Header";
import HeaderIntro from "../../HeaderIntro";

export default function Notflix() {
  return (
    <div>
      <div className="container mt-5 ml-5 mr-5">
        <div className="row">
          <div className="col-3 w-30 p-3 my-5" style={{ minWidth: "250px" }}>
            <Header />
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
                      <img src="images/1071.jpg" />
                    </div>
                    <div className="col-7 pt-3" style={{ minWidth: "300px" }}>
                      {/* Text area  */}

                      <h2 className="text-green coding-font style-h2">
                        /my-projects
                      </h2>
                      <p
                        className="text-white coding-font"
                        style={{ fontSize: "large" }}
                      >
                        Here is a link of my another personal website. Which is
                        different in UI{" "}
                        <a
                          href="http://dhruvcodes.me/quickcodes-web-react/"
                          target="_blank"
                        >
                          click here
                        </a>
                      </p>
                      <p
                        className="text-white  coding-font"
                        style={{ fontSize: "medium" }}
                      ></p>
                    </div>
                  </div>
                </div>

                {/* oter text  */}
                <div className="coding-font text-white mt-2">
                  <h1 className="text-green">Projects and experience</h1>
                  <blockquote class="blockquote">
                    <p class="mb-0">
                      If you are always at the head of the class, then you're in
                      the wrong class.
                    </p>
                    <footer class="blockquote-footer">
                      John C Maxwell{" "}
                      {/* <cite title="Source Title">Source Title</cite> */}
                    </footer>
                  </blockquote>
                  <span
                    className="custom-border p-2 my-2 mx-1"
                    style={{ fontSize: "large" }}
                  >
                    <a href="#/my-projects/chatbot">/chatbot</a>
                  </span>
                  <span
                    className="custom-border p-2 my-2 mx-1"
                    style={{ fontSize: "large" }}
                  >
                    <a href="#/my-projects/notflix">/notflix</a>
                  </span>
                  <div className="my-1">
                    <div className="custom-border p-2">
                      <h3>
                        2. Notflix{" "}
                        <span className="h6 text-green">Language - Shell Scripting</span>
                      </h3>
                      <div style={{ fontSize: "medium" }}>
                        <p className="h2">F@uck Netf!ix use Notflix.</p>
                        <p>
                          AFter using linux as a daily driver <span className="bg-color-custom">I also learned
                          shell scripting and the cool automations with it</span>, I did
                          many small automations tasks with it. And one day i
                          saw a video of a youtuber who is streaming and
                          downloading videos from torrents. I was like What the
                          hack is this Amazing!!! <span className="bg-color-custom">Let's do it.</span> But the way the
                          youtuber is doing it is not working properly for me
                          and also very lengthy. I read his whole code on github
                          the way he is scraping those torrent links is kinnda
                          weired for me.
                        </p>
                        <p>
                          But his readme.me file is super amazing so i copy that
                          file in my repo and <span className="bg-color-custom">Decided to make a script</span> that can
                          stream the videos from the torrents and then download
                          the videos to a folder also. And as a Linux user we {""}
                          <span className="bg-color-custom">believe in open source contribution,</span> So i send email to that
                          youtuber with link of my github repo of notflix in it. So
                          people can also use it.
                        </p>
                        <p>
                          And He checked it, upload it, and that's how it was.
                        </p>
                        <p className="text-green">Link of My Github Repository <a href="https://github.com/quickcodes/notflix" target='_blank' >click here</a></p>
                        <p className="text-green">Link of Youtubers Github Repository <a href="https://github.com/Bugswriter/notflix" target='_blank' >click here</a></p>
                        
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
