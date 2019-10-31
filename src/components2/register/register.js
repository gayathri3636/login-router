import React from 'react';
import ReactDOM from 'react-dom';
import { Form, Input, Button, Select, Checkbox, Icon } from "antd";
import 'antd/dist/antd.css';

class Register extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            firstName : '',
            lastName: '',
            Email: '',
            password: '',
            isValid: true,
            errorText: ''
        }
    }

    handleChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        this.setState({[name]: [value]});
    }

    isValid = () => {
        const{firstName, lastName, Email, password} = this.state;
        if(firstName.length ===0 || lastName.length ===0) {
            this.setState({isValid:false, errorText: 'Please enter first and lastName before submitting'})
        }

        if(Email.indexOf('@gmail.com')!== -1 || Email.indexOf('@rsrit.com')!== -1){
            this.setState({isValid: false, errorText: 'please enter mail from gmail or rsrit only'})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        if(this.isValid()){
            console.log("FirstName entered is:", this.state.firstName)
            console.log("lastName entered is: ", this.state.lastName)
            console.log("Email entered is: ", this.state.Email)
            console.log("password entered is: ", this.state.password)
        }
    }

    render() {
        return(
            <div className = "container">
            <Form className = "login-form">
            <Input 
            prefix = {<Icon type = "text " style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder = "firstName"
            name = "firstName"
            value = {this.state.firstName}
            onChange = {this.handleChange} />

            <Input 
            prefix = {<Icon type = "text" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder = "lastName"
            name = "lastName"
            value = {this.state.lastName}
            onChange = {this.handleChange} />

            <Input 
            prefix = {<Icon type = "mail" style={{ color: 'rgba(0,0,0,.25)' }} />}
            placeholder = "Enter Email"
            name = "email"
            value = {this.state.Email}
            onChange = {this.handleChange}/>
            <br />
            
            <Input 
            prefix = {<Icon type = "lock" style={{ color: 'rgba(0,0,0,.25)' }} />}
            type = "password"
            placeholder = "Enter password"
            name = "password"
            value = {this.state.password}
            onChange = {this.handleChange} />

            <Button className = "primary" type = "primary">Register</Button>
            </Form>
            </div>
            
            
        )
    }
}

export default Register;