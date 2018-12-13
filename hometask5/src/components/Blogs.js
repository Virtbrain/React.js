import React from 'react';
import Blog from './Blog';

export default class Blogs extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            blogs: []
        }
        fetch(`https://jsonplaceholder.typicode.com/posts`)
            .then(respose => respose.json())
            .then(data => this.setState({blogs: data}))
    }

    render(){

        if(!this.state.blogs.length) {
            return null;
        }
        let blogs = this.state.blogs.map((blog, index)=>{
            return <Blog key={index} {...blog}/>
        })

        return(
            <div className="container">
                <h1>Блоги</h1>
                {blogs}
            </div>
        );
    }
}