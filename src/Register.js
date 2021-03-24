
import './Register.css';
import { Component } from 'react';
//import Form from 'react-bootstrap/Form';
//import Buttom from 'react-bootstrap/Button';



class Register extends Component{

  handleSubmitt = event =>{
    event.preventDefault();
    this.registerUser(event.target.username.value, event.target.password.value);

 }
  registerUser(username,password){
    fetch('http://localhost:8080/users',{
      method: 'POST',
      headers:{
        'Accept': 'application/json',
        'Content-Type': 'application/json',
},
body: JSON.stringify({
  username: username,
  password: password,
})
    }).then(function(response){
      if (response.status===200){
        console.log("sukces")
      }else{
        console.log("fail")
      }
    }).catch(function(error){
      console.log("error")
    })
  }
  render (){
    console.log("test konsoli")
   return <div className="Register">
     <Form onSubmit = {this.handleSubmit}>
     <Form.Group controllid="username" size="lg">
       <Form.Label>Username</Form.Label>
       <Form.Control autoFocus name="username" />
     </Form.Group>

     <Form.Group controllid="password" size="lg">
       <Form.Label>Password</Form.Label>
       <Form.Control type="password" name="password" />
     </Form.Group>

     <Buttom block size="lg" type = "submitt">Rejestracja</Buttom>
     </Form>
    </div>
    
  }
}

export default Register;
