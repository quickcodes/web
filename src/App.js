import { Routes, Route } from "react-router-dom"
import AboutMe from "./components/Home/AboutMe";
import AboutWeb from "./components/Home/AboutWeb";
import BadWords from "./components/Home/BadWords";
import Blogs from "./components/Home/Blogs";
import Home from "./components/Home/Home";
import MyProjects from "./components/Home/MyProjects";
import BooksQuotes from "./components/projects/BooksQuotes";
import Education from "./components/projects/Education";
import FuckU from "./components/projects/FuckU";
import StoryOfBird from "./components/projects/StoryOfBird";
import MyGithubRepos from "./components/projects/MyGithubRepos";
import UpcomingStuff from "./components/projects/UpcomingStuff";
import './style.css'
import ChatBot from "./components/Home/ProjectList/ChatBot";
import Notflix from "./components/Home/ProjectList/Notflix";
import Coding from "./components/Home/BlogList/Coding";
import Linux from "./components/Home/BlogList/Linux";
import AttitudeIsEverything from "./components/projects/Books/AttitudeIsEverything";
import DoEpicShit from "./components/projects/Books/DoEpicShit";
import CodingIsEasy from "./components/Home/BlogList/CodingIsEasy";

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="about-web" element={ <AboutWeb/> } />
        // <Route path="about-me" element={ <AboutMe/> } />
        <Route path="education" element={ <Education/> } />
        <Route path="my-github-repos" element={ <MyGithubRepos/> } />
        <Route path="fuck-u" element={ <FuckU/> } />
        <Route path="bad-words" element={ <BadWords/> } />
        <Route path="upcoming-stuff" element={ <UpcomingStuff/> } />


        <Route path="my-projects" element={ <MyProjects/> } />
        <Route path="my-projects/chatbot" element={ <ChatBot/> } />
        <Route path="my-projects/notflix" element={ <Notflix/> } />

        <Route path="books-quotes" element={ <BooksQuotes/> } />
        <Route path="books-quotes/attitude-is-everything" element={ <AttitudeIsEverything/> } />
        <Route path="books-quotes/do-epic-shit" element={ <DoEpicShit/> } />


        <Route path="blogs" element={ <Blogs/> } />
        <Route path="blogs/coding" element={ <Coding/> } />
        <Route path="blogs/linux" element={ <Linux/> } />
        <Route path="blogs/coding-is-easy" element={ <CodingIsEasy/> } />

        
        {/* <Route path="github" element={ <Github/> } /> */}
        {/* <Route path="story-of-bird" element={ <StoryOfBird/> } /> */}
        <Route path="web" element={ <Home/> } />
      </Routes>
    </div>
  );
}
