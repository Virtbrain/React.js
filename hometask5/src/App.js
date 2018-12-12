import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from './styles/style.css'

import {Router, Route, IndexRoute, browserHistory} from 'react-router';

import Layout from './layout/Layout';
import Blog from './components/Blog';
import Comments from './components/Comments';
import MainPage from './components/Main';
import Users from './components/Users';

const app = document.getElementById('root');

ReactDom.render(
    <div className="app">
        <Router history={browserHistory}>
            <Route path='/' component={Layout}>
                <IndexRoute component={MainPage}/>
                <Route path='blog' component={Blog}/>
                <Route path='comments' component={Comments}/>
                <Route path='users' component={Users}/>
            </Route>
        </Router>
    </div>, 
app)