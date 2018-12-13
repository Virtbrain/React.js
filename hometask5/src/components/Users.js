import React from 'react';
import User from './User';

export default class Users extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            users: []
        }
        fetch(`https://jsonplaceholder.typicode.com/users`)
            .then(respose => respose.json())
            .then(data => this.setState({users: data}))
    }

    render(){

        if(!this.state.users.length) {
            return null;
        }
        let users = this.state.users.map((user, index)=>{
            return <User key={index} {...user}/>
        })

        return(
            <div className="container">
                <h1>Пользователи</h1>
                {users}
            </div>
        );
    }
}