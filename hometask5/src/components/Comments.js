import React from 'react';
import Comment from './Comment';

export default class Contacts extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments: []
        }

        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(respose => respose.json())
            .then(data => this.setState({comments: data}))

    }

    render(){

        if(!this.state.comments.length){
            return null;
        }

        let comments = this.state.comments.map((item, index) => {
            return <Comment key={index} {...item}/>
        })

        return(
            <div>
                <h1>Комментарии</h1>
                {
                    (!this.props.children) ? comments : this.props.children
                }
                
            </div>
        );
    }
}