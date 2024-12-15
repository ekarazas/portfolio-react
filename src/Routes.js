import React from 'react';
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import ParticlesBackground from './components/ParticlesBackground';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import Projects from './pages/Projects/Projects';
import Resume from './pages/Resume/Resume';

const Routes = () => {
  return (
    <Router>
      <ParticlesBackground id='particles' />
      <Header />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/about' component={About} />
        <Route exact path='/resume' component={Resume} />
        <Route exact path='/projects' component={Projects} />
      </Switch>
      <Footer />
    </Router>
  );
};

export default Routes;
