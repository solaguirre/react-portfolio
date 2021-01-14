import { BrowseRouter as Router, Route, Switch } from "reac-router-dom";
import Home from "./pages/Home";
import AboutMe from "./pages/AboutMe";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Navbar from ".components/Navbar";
import Footer from ".components/Footer";
import './App.css';

function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/AboutMe" component={AboutMe} />
            <Route exact path="/Portfolio" component={Portfolio} />
            <Route exact path="/Contact" component={Contact} />
          </Switch>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
