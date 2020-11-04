import logo from './logo.svg';
import './App.css';
import { Router } from '@reach/router';
import { Link } from '@reach/router';

import HomeComponent from './components/home/home.js'
import VarComponent from './components/var/var.js'
import Color1Component from './components/color1/color1.js'

function App() {
  return (
    <div className="App">
      <h1>App</h1>
      <Router>
        <HomeComponent path="/home"/>
        <VarComponent path="/:var"/>
        <VarComponent path="/:var/:color1/:color2"/>
      </Router>
      {/* <Link to="/home">Home</Link> */}
      {/* <Link to="/:num"></Link> */}
    </div>
  );
}

export default App;
