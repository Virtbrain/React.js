import React from 'react';
import {Link} from 'react-router';

export default class Header extends React.Component {

    render(){

        let menuItems = this.props.items.map((item, index) => {
            return <li className="nav-item" key={index}><Link to={item.path} className='nav-link'>{item.name}</Link></li>
        })

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
                    <div className="navbar-brand">{`Проект: "Начало!"`}</div>
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav m1-auto">
                            {menuItems}
                        </ul>
                    </div>
                </nav>
            </header>
        )
    }
}