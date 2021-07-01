import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ParticleBackground from "./components/ParticleBackground";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";

import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Resume from "./pages/Resume/Resume";
import Projects from "./pages/Projects/Projects";

const Routes = () => {
  return (
    <Router>
      <ParticleBackground />
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/resume" component={Resume} />
        <Route exact path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
