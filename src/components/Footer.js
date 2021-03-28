import { Component } from "react";
import './componentsCss/Footer.css';

class Footer extends Component{
    render(){
        return <div className="footer">	 
		 <span className="lewa">Projekt i wykonanie: Mamcarczyk Jarosław email:darisuzwod@wp.pl</span><span className="prawa"> &copy; Wszelkie prawa zastrzeżone. </span>	    
  </div>
    }
}
export default Footer;