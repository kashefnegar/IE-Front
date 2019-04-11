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

// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
// var template = { __html: __html };
class Login extends Component<Props, State> {
    render() {
        return(
            <div>
                {Header.call(this)}
                <main>

                </main>
                {Footer.call(this)}
            </div>);
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
interface Props {
    pnClick(inputValue: string): void;
}
interface State {
    inputValue: string;
}

export default Login;