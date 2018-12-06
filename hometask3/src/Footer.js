import React from 'react';
import Developer from './developer';

let Dev = new Developer("Мананков Алексей","JS");

export default class Footer extends React.Component {
    render() {
        return(
            <nav class="navbar navbar-light bg-light">
                <p>Имя разработчика: {Dev.name}</p>
                <p>Язык программирования:{Dev.lang}</p>
            </nav>
        );
    }
}