import React from 'react';
import ReactDom from 'react-dom';
import Developer from "./developer";
import css from "./style.css";
import DisplayElement from './DisplayElement';
import Users from './Users';

const app = document.getElementById('root');

const USERS = ['Ann', 'Victor', 'Olivia', 'Antony'];

ReactDom.render(
        <div>
            <DisplayElement/>
            <hr/>
            <Users items={USERS}/>
        </div>,
 app);