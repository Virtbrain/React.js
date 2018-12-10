import React from 'react';

export default class Footer extends React.Component {

    componentDidMount() {
        alert('Hello! :p');
    }

    render(){
        return (
           <footer className="py-5 bg-dark fixed-bottom">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © Your Website 2018</p>
                </div>
           </footer>
        )
    }
}