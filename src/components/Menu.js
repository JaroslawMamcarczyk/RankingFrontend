import { Component } from "react";
import {Link} from "react-router-dom";
  

class Menu extends Component{
    render(){
        return <div className="sidebar">
        <h3>Menu</h3>
        <ul>
            <li><Link to="/test">Strona Główna</Link></li>
            <li><Link to="/test">O nas</Link></li>
            <li><Link to="/test">Oferta</Link></li>
            <li><Link to="/test">Kontakt</Link></li>
        </ul>
    </div>
    }
}
export default Menu;