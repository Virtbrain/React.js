import React from 'react';

export default class LoginForm extends React.Component{
    render() {
        return (
            <div class="container">
                <form>
                    <div class="form-group">
                        <label for="Login">Login:</label>
                        <div class="col-sm-4">
                            <input type="text" class="form-control" id="Login" placeholder="Enter your login"></input>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="Password">Password:</label>
                        <div class="col-sm-4">
                            <input type="password" class="form-control" id="Password" placeholder="Enter your password"></input>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-primary mb-2">Log in</button>
                </form>
            </div>
        )
    }
}

