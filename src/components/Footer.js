import { Component } from "react";
import './componentsCss/Footer.css';

class Footer extends Component{
    render(){
        return <div className="footer">	       
		<ul>
			 <li><a href="#">Strona Główna</a></li>
			 <li><a href="#">O nas</a></li>
			 <li><a href="#">Oferta</a></li>
			 <li><a href="#">Kontakt</a></li>
		 </ul>		 
		 <div id="copyright">
	 &copy; Wszelkie prawa zastrzeżone. <br/> 
	 <p>Projekt: darisuzwod@wp.pl</p>			    
  </div>
  </div>
    }
}
export default Footer;