import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router, Route} from "react-router-dom";
import Login from "src/view/container/main/login/login";
import Home from "src/view/container/main/home/home";
import ProjectPage from "src/view/container/main/projectPage/projectPage";

ReactDOM.render((
    <Router>
        {/*<Route path = "/" component = {App}>*/}
        {/*</Route>*/}
        <Route exact path="/login" component={Login} />
        <Route exact path = "/home" component = {Home}/>
        <Route path="/projects/:projectId" component={ProjectPage} />
    </Router>
), document.getElementById('root'));
// ReactDOM.render(<Router>
//         <Route exact path="/login" component={Login}/>{
//
//     }
//     </Router>,
//     <App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
