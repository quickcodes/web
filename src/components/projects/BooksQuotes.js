import React from "react";
import Header from "../utils/Header";
import HeaderIntro from "../HeaderIntro";
// import Coding from "./BlogList/Coding";

import BookRoutes from "./Books/BookRoutes";




// things i added today: routes, projects(chatbot, notflix), books(attitude is everything, do epic shit), blogs(coding, linux)




export default function BooksQuotes() {
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
                <HeaderIntro/>
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
                        A fine quotation is a diamond on the finger fo a man of wit, and a pebble in the hand of fool.
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
                  <p className="text-green h4 my-3">print([Books].Quotes);</p>



                  <BookRoutes />

                  {/* <div>
                    <blockquote class="blockquote">
                      <p class="mb-0">Book: <span className="bg-color-custom">Attitude is Everything</span></p>
                      <footer class="blockquote-footer">
                        Jeff keller{" "}
                      </footer>
                    </blockquote>

                    <div style={{ fontSize: "medium" }}>
                      <p className="custom-border p-2">
                        IF YOU CAN DREAM IT, YOU CAN DO IT!
                      </p>
                      <p className="custom-border p-2">
                      Words are, of course, the most powerful drug used by mankind. ??? Rudyard Kipling
                      </p>

                      <p className="custom-border p-2">
                      A happy person is not a person in a certain set of circumstances, but rather a person with a certain set of attitudes.
                      </p>
                      <p className="custom-border p-2">
                      Life doesn???t reward those who refuse to expose themselves to difficulties and challenges.
                      </p>
                      <p className="custom-border p-2">
                      Nurture your mind with great thoughts. ??? Benjamin Disraeli
                      </p>
                      <p className="custom-border p-2">
                      What the mind can conceive and believe, the mind can achieve.
                      </p>
                      <p className="custom-border p-2">
                      your thoughts don???t change, your results won???t change.
                      </p>
                      <p className="custom-border p-2">
                      The greatest discovery of my generation is that human beings can alter their lives by altering their attitudes of mind. - William James
                      </p>
                      <p className="custom-border p-2">
                      Just remember the words of Napoleon Hill: ???Every adversity carries with it the seed of an equivalent or greater benefit.
                      </p>
                      <p className="custom-border p-2">
                      Your self-esteem is lowered. You feel powerless and frustrated. You sabotage your success. You lead an uneventful, boring life.
                      </p>
                      <p className="custom-border p-2">
                      When you believe you can do something, you have the courage to move forward despite being afraid.
                      </p>
                      <p className="custom-border p-2">
                      learning how to ride your bike? Well, persistence and sheer repetition, certainly. You were going to stick with it no matter how long it took! It also helped that you were enthusiastic about what you set out to achieve???that you could hardly wait to reach your goal. And finally, let???s not underestimate the impact of positive encouragement. You always knew your parents were in your corner, supporting you, rooting for your success.
                      </p>
                      <p className="custom-border p-2">
                      As adults, most of us become a lot more concerned about the opinions of others, often hesitating because people may laugh at us or criticize us. At the age of six, we knew we had to fall
                      </p>
                      <p className="custom-border p-2">
                      Success is going from failure to failure without loss of enthusiasm.
                      </p>
                      <p className="custom-border p-2">
                      Getters don???t get ??? givers get. ??? Eugene Benge
                      </p>
                      <p className="custom-border p-2">
                      Whether you think you can???or think you can???t???you???re right! ??? HENRY FORD??????WE BECOME WHAT WE THINK ABOUT
                      </p>
                      <p className="custom-border p-2">
                      A man is what he thinks about all day long.
                      </p>
                      <p className="custom-border p-2">
                      There is nothing on earth you cannot have???once you have mentally accepted the fact that you can have it.
                      </p>
                      <p className="custom-border p-2">
                      The idea that we become what we think about has also been expressed as the Law of Dominant Thought.
                      </p>
                      <p className="custom-border p-2">
                      They can because they think they can. ??? Virgil
                      </p>
                      <p className="custom-border p-2">
                      Thought precedes action.
                      </p>
                      <p className="custom-border p-2">
                      Your Circumstances Reflect What You???ve Been Thinking About
                      </p>
                      <p className="custom-border p-2">
                      Success is a state of mind. If you want success, start thinking of yourself as a success. ??? DR. JOYCE BROTHERS
                      </p>
                      <p className="custom-border p-2">
                      It is a rough road that leads to the heights of greatness. ??? Seneca
                      </p>
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
