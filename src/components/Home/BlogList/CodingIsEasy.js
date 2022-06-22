import React from "react";
import Header from "../../utils/Header";
import HeaderIntro from "../../HeaderIntro";
import BlogRoutes from "./BlogRoutes";

export default function CodingIsEasy() {
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
                      <img src="images/1095.jpg" />
                    </div>
                    <div
                      className="col-7 pt-3 coding-font"
                      style={{ minWidth: "300px" }}
                    >
                      {/* Text area  */}

                      <h2 className="text-green style-h2">/coding-is-easy</h2>

                      <div style={{ fontSize: "large" }}>
                        <p>
                          Copying someone else code is alright,
                          <br />
                          If you know what it's doing.
                        </p>
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
                      Assum that the person you are listening to might know
                      something you don't
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

                  <div className="my-1">
                    <div className="custom-border p-2">
                      <h3 className="text-green">
                        Part 1{" "}
                        {/* <span className="h6 text-green">
                          4 hours passed and windows is still updating...
                        </span> */}
                      </h3>
                      <div style={{ fontSize: "medium" }}>
                        <p>
                          It's 22 June 2022 and I'm coding for almost the last 2
                          years, In this year I learned a lot of things like a
                          pretty common question in our field is how much did
                          you rate yourself in python or any particular coding
                          language. In my 1st year of learning after completing
                          some cool or advanced projects, I write advanced level
                          in python because I think yaa I know that much.
                        </p>
                        <p>
                          But it's not true really.
                          <br />
                          Today on 22 July 2022 if now I have to rate myself in
                          python I'll rate intermediate not because I don't know
                          what syntax errors I can get but because I got an idea
                          of how much big a scope a language has and it's not
                          easy to become a real advance level programmer.
                        </p>
                        <p>
                          Because if it was that damm easy no company gonna pay
                          you 10 Lpa for that shit.
                        </p>
                        <p>
                          So how can you start coding? 🤔
                          <br />
                          Let me tell you a story of a few days ago.
                          <br />
                          Here my task is to create a basic android app with a
                          login and signup screen with email verification in it.
                        </p>
                        <p>
                          I choose to use flutter and start by creating a basic
                          first app in it after that. I create some UI so can
                          get a little bit of understanding of it. I clone
                          Instagram UI it's all happened by searching code and
                          repository on GitHub, reading documentation and after
                          a few days, I got the basic idea of how things work in
                          flutter.
                        </p>
                        <p>
                          So now I have a clear picture in my mind of what I
                          have to create. A login and signup screen with email
                          verification.
                        </p>
                        <p>
                          For email verification, I use 'AWS Cognito' because
                          they provide the best service now.
                        </p>
                        <p>
                          So what I did is start scraping GitHub so I can found
                          anyone's pre-build project so I didn't have to code a
                          single line. But I'm not lucky as that. So now I have
                          to build it.
                          <br />I start founding the login and signup page coded
                          in flutter on GitHub. And I got some. But they are
                          very old and not working properly. So I have to fix
                          some bugs.
                          <br />
                          So I decide to choose this path and I clone a pretty
                          good-looking UI that is working in android, ios, and
                          web so I clone it from GitHub to my laptop.
                          <br />
                          And after running that project I got damm list of
                          errors. I was like oh my god where is the f@king gun.
                          But the reality is that I have to solve all of them so
                          I start reading errors so I can get an idea of what is
                          happening wrong here. And the most interesting,
                          irritating thing about bugs is that sometimes they'll
                          get fixed withing a google search and sometimes
                          ahhhhhhhhh! They'll not afraid to take a single day or
                          maybe more than that and it frustrates a lot! because
                          when we spend hours on something and it is not
                          happening in the way we want then it's f@king
                          irritating. But Always remember that{" "}
                          <span className="bg-color-custom">
                            "If you fell like doing something for a very long
                            time, then you must do it. Our lives are shaped by
                            our urges. If we decide to satisfy our urges, they
                            fashion our path, if we beat them, they build our
                            character"
                          </span>{" "}
                          And after spending many hours on StackOverflow,
                          GitHub, documentation, etc. After Overcoming the
                          taught of Quiting the project. I end up with 0
                          errors... It's like a YES YES YES moment for me.
                        </p>
                      </div>
                    </div>

                    <div className="custom-border p-2">
                      <h3 className="text-green">
                        Part 2{" "}
                        {/* <span className="h6 text-green">
                          4 hours passed and windows is still updating...
                        </span> */}
                      </h3>
                      <div style={{ fontSize: "medium" }}>
                        <p>
                          <br />
                          So the UI is done now I have to integrate AWS Cognito
                          in my login and signup form and that's it.
                        </p>
                        <p>
                          So I open firefox to search for "AWS Cognito login
                          flow in flutter" on youtube and watched many videos.
                          They have their code repo also which is not working
                          because they are old. And after spending a day
                          watching videos I got the idea that watching youtube
                          videos is waste of time in 70% of cases for me so went
                          to the official website of AWS Cognito. After reading
                          and implementing the documentation I found that
                          flutter has one dependency called flutter_login which
                          gives a pre-build login and signup form which is far
                          far more familiar with AWS integration.
                        </p>
                        <p>
                          So now all of my work, and time spent on that login
                          form is wasted. But is it actually wasted? or does it
                          makes me more confident and cleared my concepts of
                          flutter. I think the 2nd one is right Because now I am
                          not feeling like a complete dumb beginner in flutter.
                          I am feeling confident enough to solve bugs and
                          understand code and it's only because of the articles,
                          codes, and documentation I read on the internet. So
                          the time spent on that login form is totally worth it,
                          maybe I can use that somewhere else.
                        </p>
                        <p>
                          okay Okay Okay it's worth it. We got it. But what now?
                        </p>
                        <p>
                          With my past experience with youtube this time I start
                          by reading websites not by watching videos.
                        </p>
                        <p>
                          Flutter app can run on the web, android, and ios. So
                          most of the time I run my project on directly the web
                          because it's super easy.
                          <br />
                          So when I start implementation of AWS Cognito I run my
                          app on the web and it won't work and I don't know what
                          the tech is happening wrong. Everything is Absolutely
                          right I check my code again and again, and everything
                          is perfect. I checked all the dependencies, their
                          versions, and everything I can. I got very frustrated
                          because every little thing is perfect according to me
                          and it was not working. I'm on the way to quitting the
                          project. Then I realize that I spend a lot of time on
                          this project and I can't quit it because if I clear
                          this stage of coding I can do many many possible
                          things. So I forced myself to code again and start
                          researching why this is happening after some hours of
                          deep focus on the code gives me an understanding that
                          AWS Cognito authentication is different for IOS,
                          Android, and web. An app made for one platform won't
                          run on another. That the mistake I did is I made an
                          app for android and tried to run it on the web so the
                          code is unable to authenticate that's why it is
                          exiting the code.
                        </p>
                        <p>
                          Again It's a WOW WOW moment for me. It's a big reward
                          for me. Now I can continue my project. I connect my
                          phone to my laptop and start running it. and it f@king
                          won't work...
                        </p>
                        <p>
                          I Press Alt + f4 key many times and shut my laptop
                          down.
                        </p>
                        <p>
                          After many hours I turn it on and checked my code
                          deeply scraped the internet why why why it was
                          happening. Nothing is working.
                        </p>
                        <p>
                          So I asked myself What advice I give if someone else
                          is getting the same error?
                        </p>
                        <p>
                          My mind said that remove all the complicated code and
                          start with a basic single text. Currently, there are 2
                          main things first is authentication and the second is
                          the login form which comes after the authentication
                          process. So I commented out all my code which returns
                          a login form. And just returned Text("Hello from
                          here") and boom it won't work. Now it's clear that
                          something happened wrong before reaching that text. I
                          checked my code. Everything is perfect Because I
                          copied it code from and working project. It is just a
                          simple authentication.
                        </p>
                        <p>
                          But when I tried to understand what is actually
                          happening in the code then I realized that the current
                          code for my AWS Cognito version is outdated and now I
                          have to write my own so I start writing it slowly and
                          boom this time it works.
                        </p>
                        <p>
                          I got a screen with a "Hello from here" message. Again
                          it's a Big Big Biggg Achievement for me. Now I have to
                          check my login/signup form code. I uncomment it and
                          it's working... Hurrah!!!
                        </p>
                        <p>
                          But by default, the form is working with static
                          values, not with AWS Cognito so now I just have to
                          Connect AWS Cognito with my app.
                        </p>
                      </div>
                    </div>

                    <div className="custom-border p-2">
                      <h3 className="text-green">
                        Part 3{" "}
                        <span className="h6 text-green">Comming Soon</span>
                      </h3>
                      <div style={{ fontSize: "medium" }}>
                        <p>Connecting AWS Cognito with my app...</p>
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
