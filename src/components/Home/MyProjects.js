import React, { useState } from "react";
import Header from "../utils/Header";
import HeaderIntro from "../HeaderIntro";
import ChatBot from "./ProjectList/ChatBot";
import Web from "./ProjectList/Web";

export default function MyProjects() {
  const project_data = [{ app: <ChatBot /> }, { app: <Web /> }];

  const [current, setCurrent] = useState(0);
  const length = project_data.length;

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };

  if (!Array.isArray(project_data) || project_data.length <= 0) {
    return null;
  }

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
                    className="custom-border p-2 my-2"
                    style={{ fontSize: "large" }}
                  >
                    <a href="#/my-projects/chatbot">chatbot</a>
                  </span>
                  <span
                    className="custom-border p-2 my-2"
                    style={{ fontSize: "large" }}
                  >
                    <a href="#/my-projects/notflix">notflix</a>
                  </span>
                  <div className="my-1">
                    <div className="custom-border p-2">
                      <h3>
                        1. ChatBot <span className="h6 text-green">Language - python</span>
                      </h3>
                      <div style={{ fontSize: "medium" }}>
                        <p>
                          Coding chatbot is the first big project of my life. It
                          all start from watching Iron man's jarvis. He has
                          pretty cool assistant and everyone wan't something
                          like jarvis that why i start to code one.
                        </p>
                        <p>
                          And it's also good for my resume too. I can take all
                          of my small projects and put them into my new
                          assistant like features. I started this project the
                          end of my 1<sup>st</sup> year of college. It's{" "}
                          <span className="bg-color-custom">2021</span>
                        </p>
                        <p>
                          I start watching YouTube videos about virtual
                          assistant with implementing them. Almost all of the
                          YouTubers are writing a long{" "}
                          <span className="bg-color-custom">
                            if...then...else...
                          </span>{" "}
                          ladder something like{" "}
                          <span className="bg-color-custom">if</span> i say play
                          song <span className="bg-color-custom">then</span>{" "}
                          play songs{" "}
                          <span className="bg-color-custom">else</span> do
                          nothing. You can see the full source code{" "}
                          <a
                            href="https://github.com/quickcodes/Grace/blob/main/same_code_without_NN.py"
                            target="_blank"
                          >
                            click here.
                          </a>
                          I wrote more than 3000 lines of code. then is start
                          optimizing code and fixing issues like what if someone
                          say{" "}
                          <span className="bg-color-custom">open youtube</span>{" "}
                          or{" "}
                          <span className="bg-color-custom">
                            open youtube and play Trending songs
                          </span>
                          . Here Both starts with{" "}
                          <span className="bg-color-custom">open youtube</span>{" "}
                          but the action taken by the assistant have to be
                          different. I start fixing lots of bug's errors and
                          optimizing the code as much i can.
                        </p>
                        <p>
                          Just Before my 1<sup>st</sup> year exams i end up with
                          almost 1000 line of code. And a major thing i learned
                          at that time is that you can find small and common
                          things on youtube easily But when it commes to
                          creating something for your own you have to{" "}
                          <span className="bg-color-custom">
                            build your own logic{" "}
                          </span>
                          . Mybe my code is just a peice of sh!ts in 2022 but
                          it's my own.
                        </p>
                        <p>
                          I never stop improving{" "}
                          <span className="bg-color-custom">Grace.</span> Btw
                          Grace is the name of my assistant even while my exams
                          are running like what if we add power of maching
                          learning, or what if we add this code into{" "}
                          <span className="bg-color-custom">raspberry pi</span>{" "}
                          and make soemting like alexa.
                        </p>
                        <p>
                          After the end of my exams i start code again and
                          starts re-designing the whole project because i want
                          power of neural networks. So Grace can understand and
                          relate human language more easily and effecitely. I
                          start researching, implementing. I read lot of
                          Documentations as i can. Did everything i can and
                          after 1 year of progress I endup with my brand new
                          Assistant which is{" "}
                          <span className="bg-color-custom">
                            now capable to understand human voice and can did
                            Lot'ssssss of things now.
                          </span>{" "}
                          I wirte some features in my Github repo's readme.me
                          file also
                          <a
                            href="https://github.com/quickcodes/Grace"
                            target="_blank"
                          >
                            click here
                          </a>{" "}
                          to read them. You can also check full code also.
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
