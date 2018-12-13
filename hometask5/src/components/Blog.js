import React from 'react';
import {Link} from 'react-router';

export default class Blog extends React.Component{

    render(){
        return(
            <div className="card border-secondary mb-3">
                <div className="card-header">{this.props.title}</div>
                <div className="card-body text-secondary">
                    <p>{this.props.body}</p>                    
                </div>
                <div className="card-footer"><Link to={`/blogs/${this.props.id.toString()}`}>Комментарии</Link></div>
            </div>
        )
    }
}