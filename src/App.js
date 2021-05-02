import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home/Home';
import Contact from './components/Contact/Contact';
import Blogs from './components/Blogs/Blogs';
import NavbarHeader from './components/Navbar/Navbar';
import Resume from './components/Resume/Resume';

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          {/* <NavbarHeader /> */}
          <Switch>
            <Route path="/home">
              <Home />
            </Route>

            <Route path="/about">

            </Route>
            <Route path="/contact">
              <Contact />
            </Route>
            <Route path="/blogs">
              <Blogs />
            </Route>
            <Route path="/resume">
              <Resume />
            </Route>
            <Route path="/">
              <Home />
            </Route>

          </Switch>
        </div>
      </Router>

    </div>
  );
}

export default App;
