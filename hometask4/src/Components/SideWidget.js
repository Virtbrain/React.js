import React from 'react';

export default class SideWidget extends React.Component {

    render(){
        return (
            <div className="card my-4">
                <h5 className="card-header">{this.props.items.title}</h5>
                <div className="card-body">{this.props.items.text}</div>
            </div>
        )
    }
}