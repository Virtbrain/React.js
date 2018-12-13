import React from 'react';

export default class Comment extends React.Component{
    render(){
        return (
            <div className="card border-secondary mb-3">
                <div className="card-header">{this.props.name} - {this.props.email}</div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>
                </div>
            </div>
        )
    }
}