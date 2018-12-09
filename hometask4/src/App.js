import React from 'react';
import ReactDom from 'react-dom';
import Developer from "./developer";
import css from "./style.css";
import DisplayElement from './DisplayElement';
import Users from './Users';
import LifeCycleMount from './LifeCycleMount';
import LifeCycleUpdate from './LifeCycleUpdate';
import LifeCycleUnmount from './LifeCycleUnmount';

class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            showUnmountComponent: true,
        };
    }

    render() {
        return(
            <div>
                {this.state.showUnmountComponent ? <LifeCycleUnmount/> : null}
                <button onClick={() =>{
                    this.setState({showUnmountComponent: false})
                }}>Удалить компонент</button>
            </div>
        )
    }
}

const app = document.getElementById('root');

const USERS = ['Ann', 'Victor', 'Olivia', 'Antony'];

ReactDom.render(
        <div>
            <DisplayElement/>
            <hr/>
            <Users items={USERS}/>
            <hr/>
            <App/>
        </div>,
 app);