import React from 'react';


export default function Header(){
    return (

        <div className="leftmenu coding-font">
        <div className="menu">
          <div className="title">
            <b>[</b>home<b>]</b>
          </div>
          <a href="#/home">
            <b>[</b>/home &#127968;<b>]</b>
          </a>
          <a href="#/about-me">
            <b>[</b>/about-me &#128104;<b>]</b>
          </a>
          <a href="#/my-projects">
            <b>[</b>/my-projects &#128104;&#8205;&#128187;<b>]</b>
          </a>
          <a href="#/blogs">
            <b>[</b>/blogs &#128394;&#65039;<b>]</b>
          </a>
          <a href="#/about-web">
            <b>[</b>/about-web &#127760;<b>]</b>
          </a>
        </div>

        <div className="menu">
          <div className="title">
            <b>[</b>projects<b>]</b>
          </div>
          <a href="#/my-github-repos">
            <b>[</b>/my-github-repos &#128008;&#8205;&#11035;<b>]</b>
          </a>
          <a href="#/education">
            <b>[</b>/education &#128214;<b>]</b>
          </a>
          <a href="#/upcoming-stuff">
            <b>[</b>/upcoming-stuff &#128302;<b>]</b>
          </a>
          <a href="#/fuck-u">
            <b>[</b>/f@ck-u &#128405;<b>]</b>
          </a>
          {/* <a
            href="#/xcrap/saticon.html"
           
          >
            <b>[</b>/f@ck-u<b>]</b>
          </a> */}
        </div>

        <div className="title">
          <b>[</b>contact<b>]</b>
        </div>

        <div className="main-text text-green">dhruvcodes7220@gmail.com</div>
        <p className="text-primary">To get best experience use big screen</p>
      </div>

    );
}


