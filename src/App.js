
import './components/style.css';
import React, { Component } from 'react';
import Menu from './components/Menu.js';
import Footer from './components/Footer.js';
import Header from './components/Header.js';




class App extends Component{

    render (){
   return <div className = "contener">
   <div className="headerContener">
<Header />
   </div>
   <div className="menuContener"> 
<Menu />
   </div>
   <div className="footerContener">
<Footer />
   </div>
  </div>
}
 }

export default App;
