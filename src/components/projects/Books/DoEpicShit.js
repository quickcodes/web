import React from "react";
import Header from "../../utils/Header";
import HeaderIntro from "../../HeaderIntro";
// import Coding from "./BlogList/Coding";

export default function DoEpicShit() {
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
                      <img src="images/1020.jpg" />
                    </div>
                    <div className="col-7 pt-3" style={{ minWidth: "300px" }}>
                      {/* Text area  */}

                      <h2 className="text-green coding-font style-h2">
                        /books-quotes
                      </h2>
                      <p
                        className="text-white coding-font"
                        style={{ fontSize: "large" }}
                      >
                        A fine quotation is a diamond on the finger fo a man of
                        wit, and a pebble in the hand of fool.
                      </p>
                      {/* <p
                        className="text-white coding-font"
                        style={{ fontSize: "medium" }}
                      >
                        A fine quotation is a diamond on the finger fo a man of wit, and a pebble in the hand of fool.
                        <span className="bg-color-custom">
                            Tell me about yourself?
                          </span>{" "}
                          It almost feels like someone allowed me to sing an old
                          song. Same lyrics with some variables in it.
                      </p> */}
                      {/* <p className="text-white  coding-font"
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
                  <h1 className="text-green">print([Books].Quotes);</h1>

                  <div className="mb-3">
                    <span
                      className="custom-border p-2 my-2 mx-1"
                      style={{ fontSize: "large" }}
                    >
                      <a href="#/books-quotes/attitude-is-everything">
                        /attitude-is-everything
                      </a>
                    </span>
                    <span
                      className="custom-border p-2 my-2 mx-1"
                      style={{ fontSize: "large" }}
                    >
                      <a href="#/books-quotes/do-epic-shit">/do-epic-shit</a>
                    </span>
                  </div>

                  <div>
                    <blockquote class="blockquote">
                      <p class="mb-0">
                        Book:{" "}
                        <span className="bg-color-custom">Do Epic Shit</span>
                      </p>
                      <footer class="blockquote-footer">
                        Ankur Warikoo{" "}
                        {/* <cite title="Source Title">Source Title</cite> */}
                      </footer>
                    </blockquote>

                    <div style={{ fontSize: "medium" }}>
                      <p className="custom-border p-2">
                      The first few episodes of the Netflix series maybe boring. However, you still keep watching the series. It turns out, a friend told you to stay at it because it gets interesting eventually.
What if we treat our goals and our journey in the same way?
                      </p>
                      <p className="custom-border p-2">
                      Don’t measure how valuable you are by the way you are treated.
                      </p>

                      <p className="custom-border p-2">When you say you have five years of experience, is it five years of experience or one year of experience done five times over?
                      </p>
                      <p className="custom-border p-2">It’s okay to ask questions.
It’s okay to be genuinely curious to know more.
It’s more than okay to ask even if others would think it is ‘dumb’.
                      </p>
                      <p className="custom-border p-2">Your goal is to make people say: ‘I am not sure if she knows how to do it. But I am certain if told to do it, she will definitely figure it out. I trust her.’
                      </p>
                      <p className="custom-border p-2">The awards are never for us.
They are for the positions we hold.
                      </p>
                      <p className="custom-border p-2">Waking up early fizzles out, sleeping on time is what flourishes.
                      </p>
                      {/* <p className="custom-border p-2">
                        The greatest discovery of my generation is that human
                        beings can alter their lives by altering their attitudes
                        of mind. - William James
                      </p>
                      <p className="custom-border p-2">
                        Just remember the words of Napoleon Hill: “Every
                        adversity carries with it the seed of an equivalent or
                        greater benefit.
                      </p>
                      <p className="custom-border p-2">
                        Your self-esteem is lowered. You feel powerless and
                        frustrated. You sabotage your success. You lead an
                        uneventful, boring life.
                      </p>
                      <p className="custom-border p-2">
                        When you believe you can do something, you have the
                        courage to move forward despite being afraid.
                      </p>
                      <p className="custom-border p-2">
                        learning how to ride your bike? Well, persistence and
                        sheer repetition, certainly. You were going to stick
                        with it no matter how long it took! It also helped that
                        you were enthusiastic about what you set out to
                        achieve—that you could hardly wait to reach your goal.
                        And finally, let’s not underestimate the impact of
                        positive encouragement. You always knew your parents
                        were in your corner, supporting you, rooting for your
                        success.
                      </p>
                      <p className="custom-border p-2">
                        As adults, most of us become a lot more concerned about
                        the opinions of others, often hesitating because people
                        may laugh at us or criticize us. At the age of six, we
                        knew we had to fall
                      </p>
                      <p className="custom-border p-2">
                        Success is going from failure to failure without loss of
                        enthusiasm.
                      </p>
                      <p className="custom-border p-2">
                        Getters don’t get — givers get. — Eugene Benge
                      </p>
                      <p className="custom-border p-2">
                        Whether you think you can—or think you can’t—you’re
                        right! — HENRY FORD”“WE BECOME WHAT WE THINK ABOUT
                      </p>
                      <p className="custom-border p-2">
                        A man is what he thinks about all day long.
                      </p>
                      <p className="custom-border p-2">
                        There is nothing on earth you cannot have—once you have
                        mentally accepted the fact that you can have it.
                      </p>
                      <p className="custom-border p-2">
                        The idea that we become what we think about has also
                        been expressed as the Law of Dominant Thought.
                      </p>
                      <p className="custom-border p-2">
                        They can because they think they can. — Virgil
                      </p>
                      <p className="custom-border p-2">
                        Thought precedes action.
                      </p>
                      <p className="custom-border p-2">
                        Your Circumstances Reflect What You’ve Been Thinking
                        About
                      </p>
                      <p className="custom-border p-2">
                        Success is a state of mind. If you want success, start
                        thinking of yourself as a success. — DR. JOYCE BROTHERS
                      </p>
                      <p className="custom-border p-2">
                        It is a rough road that leads to the heights of
                        greatness. — Seneca
                      </p> */}
                      {/* <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p> */}
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
