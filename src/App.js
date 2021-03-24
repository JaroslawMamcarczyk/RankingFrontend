
import './components/style.css';
import React, { Component } from 'react';
//import Register from './Register.js';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Content from './components/Content.js';
import Header from './components/Header.js';

class App extends Component{
  render (){
   return <div className = "wrapper">
  <Header /><Menu />
 <Content />   
  <Footer />
           </div>
  }
}

export default App;
