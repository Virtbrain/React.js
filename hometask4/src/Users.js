import React from 'react';

export default class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            users: this.props.items
        };
        this.addUser = this.addUser.bind(this)
    }

    addUser(user) {
        // console.log('Добавление пользоватлея');
        // console.log(this.refs.nameUser.value);
        const userName = this.refs.nameUser.value;

        if(userName.length < 3) {
            alert('Имя должно включать в себя более 2 символов');
            return false;
        }
        const users = [...this.state.users, userName];
        this.setState({users})
        this.refs.nameUser.value = "";
    }

    render() {

        let users = this.state.users.map((user, index) => {
            return <li key={index}>{user}</li>
        });

        console.log(this);
        return(
            <div>
                <ul>
                    {users}
                </ul>
                <hr/>
                <label>
                    Введите имя пользователя: <input ref="nameUser" type="text" placeholder="Имя"/>
                </label>
                <button onClick={this.addUser}>Добавить пользователя</button>
            </div>
        );
    }
}