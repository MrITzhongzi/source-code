import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Login from './component/login'

import {
    HashRouter as Router,
    Route, Switch
} from 'react-router-dom'

ReactDOM.render(
    <Router>
        <Switch>
            <Route path="/login" component={Login}/>
            <Route path="/" component={App}/>
        </Switch>
    </Router>, document.getElementById('root'));
