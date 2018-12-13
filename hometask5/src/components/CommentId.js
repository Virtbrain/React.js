import React from 'react';
import CommentCard from './Comment';

export default class CommentId extends React.Component{

    constructor(props){
        super(props);
        this.state = {
            comments: []
        }
        // console.log(this.props.params.postId)
        let comms = []
        fetch(`https://jsonplaceholder.typicode.com/comments`)
            .then(respose => respose.json())
            .then(data => {
                data.forEach((item) => {
                    if (item.PostId === this.props.params.id){
                        this.setState({comments: item})
                    }
                })
            })
    }

    render(){

        return(
            <div>
                <h1>Комментарии</h1>
                {this.state.comments && <CommentCard {...this.state.comments} />}
            </div>
        );
    }
}