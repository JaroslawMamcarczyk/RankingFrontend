import ViewMovies from './ViewMovies';
import React, { Component } from "react";
import { Button } from 'react-bootstrap';

class Movies extends Component{

  state ={ movies: []}

  componentDidMount(){
    fetch('http://localhost:8080/movies')
    .then(Response => Response.json())
    .then(movies => 
      this.setState({movies}));
  }

render(){
    return <div className = "movies">
<table>
 <thead>
   <tr>
 <th> Nazwa filmu </th> <th> Logo </th> <th> Rok produkcji</th>
 </tr>
 </thead>
{this.state.movies.map(movie =><ViewMovies x={movie}/>)}
<tr><Button>dodaj</Button></tr>
</table>
    </div>
}

}export default Movies