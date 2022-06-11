import { Routes, Route } from "react-router-dom"
import AboutMe from "./components/Home/AboutMe";
import AboutWeb from "./components/Home/AboutWeb";
import BadWords from "./components/Home/BadWords";
import Blogs from "./components/Home/Blogs";
import Home from "./components/Home/Home";
import MyProjects from "./components/Home/MyProjects";
import Education from "./components/projects/Education";
import FuckU from "./components/projects/FuckU";
import MyGithubRepos from "./components/projects/MyGithubRepos";
import UpcomingStuff from "./components/projects/UpcomingStuff";
import './style.css'

export default function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="home" element={ <Home/> } />
        <Route path="about-web" element={ <AboutWeb/> } />
        // <Route path="about-me" element={ <AboutMe/> } />
        <Route path="education" element={ <Education/> } />
        <Route path="blogs" element={ <Blogs/> } />
        <Route path="my-github-repos" element={ <MyGithubRepos/> } />
        <Route path="fuck-u" element={ <FuckU/> } />
        <Route path="bad-words" element={ <BadWords/> } />
        <Route path="my-projects" element={ <MyProjects/> } />
        <Route path="upcoming-stuff" element={ <UpcomingStuff/> } />
        {/* <Route path="github" element={ <Github/> } /> */}
        <Route path="web" element={ <Home/> } />
      </Routes>
    </div>
  );
}
