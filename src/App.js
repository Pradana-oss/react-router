import './App.css';
import Container from './component/container';
import Containeraction from './component/containeraction';
import About from './about';
import Footer from './component/footer';
import Header from './component/header';
import Welcome from './component/welcome';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
}from "react-router-dom";

function App() {
  return (
    <Router>
    <div class="container-fluid">
      <Header/>
      <Welcome/>
      <Route path="/" exact component={Container}/>
      <Route path="/about" component={About}/>
      
      <Containeraction/>
      <Footer/>
           
    </div>
    </Router>
  );
}

export default App;
