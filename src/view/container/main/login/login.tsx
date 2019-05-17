import React, {Component} from 'react';
import './login.scss';
// import React from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from '../../../serviceWorker';

import {BrowserRouter as Router,Route, Link} from 'react-router-dom'
// var __html =require('src/view/template/static/base.html');
import Header from 'src/view/container/header/header'
import Footer from 'src/view/container/footer/footer'
import Tifanibar from 'src/view/container/header/tifanibar'
import {Button, Form} from "react-bootstrap";
import axios from "axios";
const config = { headers: {'Content-Type': 'application/json'} };
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// var template = { __html: __html };
class Login extends Component <props, state> {

    constructor(props: props) {
        super(props)
        this.state = {
            inputValue:'',
            username: '',
            password: '',
        };
    }
    handleUsername(e){
        this.setState({username: e.target.value});
    }
    handlePassword(e){
        this.setState({password: e.target.value});
    }

    handleSubmit = event => {
        event.preventDefault();

        var user = {
            username:this.state.username,
            password:this.state.password,
        };

        axios.post(`http://localhost:8080/login`, { user } ,config)
            .then(res => {
                console.log(res);
                console.log(res.data);
            })
    }
    render() {

        var div = (
            <div>
                {Header.call(this)}
                {Tifanibar.call(this,true)}
                <main  >
                    <Form action={'/'}>

                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>نام کاربری</Form.Label>
                            <Form.Control type="email" placeholder="kashefnegar"
                                          onChange={(event) => this.handleUsername(event)}/>
                        </Form.Group>

                        <Form.Group controlId="formBasicPassword">
                            <Form.Label>رمز عبور</Form.Label>
                            <Form.Control type="password" placeholder="******"
                                          onChange={(event) => this.handlePassword(event)}
                            />
                        </Form.Group>
                        <Form.Group>
                            <span dir="rtl"><a href="/signup">  ثبت نام</a></span>
                            <Button variant="primary" type="submit">
                                ورود
                            </Button>

                        </Form.Group>
                    </Form>

                </main>

                {Footer.call(this)}
            </div>);
        return div;
        // return( Header.call(this)
        // Footer.call(this);)
    }

    submitForm(e: React.FormEvent<HTMLFormElement>): void {
        const {inputValue} = this.state;
        e.preventDefault();
    }
    handleInputChange(e: React.ChangeEvent<HTMLInputElement>): void {
        this.setState({ inputValue: e.target.value });
    }

}
interface props {
    pnClick(inputValue: string): void;
}
interface state {
    inputValue: string;
    username:string
    password:string
}


// @ts-ignore
export default Login;