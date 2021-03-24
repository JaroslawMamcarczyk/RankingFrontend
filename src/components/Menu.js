import { Component } from "react";
//import './componentsCss/Menu.css';

class Menu extends Component{
    render(){
        return <div className="sidebar">
        <h3>Menu</h3>
        <ul>
            <li><a href="blank">Strona Główna</a></li>
            <li><a href="blank">O nas</a></li>
            <li><a href="blank">Oferta</a></li>
            <li><a href="blank">Kontakt</a></li>
        </ul>
    </div>
    }
}
export default Menu;