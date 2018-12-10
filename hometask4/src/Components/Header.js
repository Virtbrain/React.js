import React from 'react';

export default class Header extends React.Component {

    render(){

        let menuItems = this.props.items.map((item, index) => {
            if (index==0){
                return <li className="nav-item active" key={index}><a className="nav-link" href="#">{item}</a></li>
            } else {
                return <li className="nav-item" key={index}><a className="nav-link" href="#">{item}</a></li>
            }
        })

        return (
            <header>
                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                    <div className="navbar-brand">Start Bootstrap</div>
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