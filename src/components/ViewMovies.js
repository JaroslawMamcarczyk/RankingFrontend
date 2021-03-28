import React, {Component} from 'react';
import { Button } from 'react-bootstrap';

class ViewMovies extends Component{
    handleSubmitt = event =>{
        event.preventDefault();
       
     }

    render(){
        return(
                <tr>
                <td>  {this.props.x.title}  </td>
        <td>  {this.props.x.logo}   </td>
        <td> { this.props.x.year} </td>
        <td> <Button onClick= {this.handleSubmit}>edytuj</Button></td>
        </tr> 
        );
    }
}
export default ViewMovies