import React, { useState } from "react";
import Header from "../utils/Header";
import ChatBot from "./ProjectList/ChatBot";
import Web from "./ProjectList/Web";
import HeaderIntro from "../HeaderIntro";

export default function MyProjects() {
  const project_data = [
    {app: <ChatBot />},
    {app: <Web />},
  ];

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
              <HeaderIntro/>
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
                      {/* <p
                          className="text-white coding-font"
                          style={{ fontSize: "medium" }}
    >Uploading soon</p>*/}
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
                  <span className="custom-border p-2 my-2" style={{fontSize: 'large'}}><a href="#/my-projects">chatbot</a></span>
                  <div className="my-1"><ChatBot /></div>
                  

                  {/* -------------------------------------------------------------------- */}
                  {/* -------------------------------------------------------------------- */}
                  {/* -------------------------------------------------------------------- */}
                  {/* -------------------------------------------------------------------- */}

                  {/* <section className='slider'>
              <button className='left-arrow' onClick={prevSlide} />
              <button className='right-arrow' onClick={nextSlide} />
              {project_data.map((slide, index) => {
                return (
                  <div style={{display: "flex", border: "1px solid red"}}>
{slide.app}
                  </div>
                  
                );
              })}
            </section> */}

                  <>
                    {/* data = project_data.at(0).proj */}

                    {/* <{project_data.at(0).proj}/> */}
                  </>

                  {/* -------------------------------------------------------------------- */}
                  {/* -------------------------------------------------------------------- */}
                  {/* -------------------------------------------------------------------- */}
                  {/* -------------------------------------------------------------------- */}
                </div>
                {/* <p className="text-white  coding-font mt-2"
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
                  </p> */}
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}
