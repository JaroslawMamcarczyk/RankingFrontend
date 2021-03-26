
import './components/style.css';
import React, { Component } from 'react';
//import Register from './Register.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';
import Header from './components/Header.js';
import Test from './components/Test.js';
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";



class App extends Component{

    render (){
   return <div className = "wrapper">
   <div className= "headerContener">
  <Header />
  </div>
  <div className = "menuContener">
<Menu />
  </div>
  <div className = "footerContener">
  <Footer />
  </div>
  </div>
}
 }

export default App;
