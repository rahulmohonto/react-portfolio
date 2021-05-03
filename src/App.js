import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import NavbarHeader from './components/Navbar/Navbar';

import AboutMe from './components/AboutMe/AboutMe';
import SocialConnection from './components/SocialConnection/SocialConnection';
import Projects from './components/Projects/Projects';
import ProjectsDetails from './components/ProjectDetails/ProjectsDetails';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <NavbarHeader />

          <Switch>
            <Route path="/home">
              <Home />
            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/about">
              <AboutMe />
            </Route>
            <Route path="/projects">
              <Projects />
              <Route path="/details/:id">
                <ProjectsDetails></ProjectsDetails>
              </Route>
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>
        <SocialConnection />
      </Router>

    </div>
  );
}

export default App;
