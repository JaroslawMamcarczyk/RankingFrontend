import { Component } from "react";
import {Link} from "react-router-dom";
import {BrowserRouter as Router, Switch,Route,} from "react-router-dom";
import './componentsCss/Menu.css'
import Content from './Content.js';
import Movies from './Movies.js';
import Ranking from './Ranking.js';
const routes = [{
    path: "/test",
    main: () => <div />
  },
{
path: "/movies",
main: () => <div className = "contentContener">
  <Movies />
</div>
},
{
  path: "/ranking", 
  exact: true,
  main: () => <div className ="contentContener">
  <Ranking  />
  </div>
},
{
    path: "/", 
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
            <li><Link to="/movies">Filmy </Link></li>
            <li><Link to="/ranking">Rankingi</Link></li>
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