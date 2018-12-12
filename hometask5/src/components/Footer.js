import React from 'react';

export default class Footer extends React.Component {

    render(){
        return (
           <footer className="py-5 bg-dark fixed-bottom">
                <div className="container">
                    <p className="m-0 text-center text-white">Copyright © {this.props.items}</p>
                </div>
           </footer>
        )
    }
}