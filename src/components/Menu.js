import { Component } from "react";
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import './componentsCss/Menu.css'
import Test from './Test.js';
import Content from './Content.js';
const routes = [{
    path: "/test",
    main: () => <div />
  },

{
    path: "", 
    exact: true,
    main: () => <div className ="contentContener">
    <Content />
    </div>
  },
   ];
class Menu extends Component{
   
    render(){
        return <Router>
        <div className="sidebar">
        <h3>Menu</h3>
        <ul>
            <li><Link to="/">Strona Główna</Link></li>
            <li><Link to="/test">O nas</Link></li>
            <li><Link to="/test">Oferta</Link></li>
            <li><Link to="/test">Kontakt</Link></li>
        </ul>
    </div>
    <Switch>
            {routes.map((route, index) => (
            <Route
            key={index}
            path={route.path}
            exact={route.exact}
            children={<route.main />}
          />
        ))}
        </Switch>
    </Router>
    }
}
export default Menu;