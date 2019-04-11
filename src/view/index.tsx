import React, {Component} from 'react';

import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import Login from 'src/view/container/main/login/login'
import {BrowserRouter as Router, Route} from "react-router-dom";

class Index extends Component {
    render() {
        return (
            document.getElementById('root'),
                <Router>
                <Route exact path="/login" component={Login} />{

            }
            </Router>
        )
    }
}
// serviceWorker.unregister();
// export default Index;