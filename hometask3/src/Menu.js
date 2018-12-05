import React from 'react';

export default class Menu extends React.Component{
    render() {
        console.log(this.props);

        let items = this.props.items.map((item, index) => {
            return <li class="nav-item" key={index}><a class="nav-link" href={item.href}>{item.title}</a></li>
        })
        return(
            <nav class="navbar navbar-light bg-light">
                <a class="navbar-brand" href="#">
                    <img src="React.png" width="40" height="30" class="d-inline-block align-top" alt=""></img>
                    {this.props.titleMenu}
                </a>
                <ul class="nav nav-pills">
                    {items}
                </ul>
            </nav>
        )
    }
}