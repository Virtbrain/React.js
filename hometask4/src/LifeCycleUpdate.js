import React from 'react';

export default class LifeCycleUpdate extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        };
        console.log('constructor(props)');
    }

    static getDerivedStateFromProps(props, state){
        console.log('1. getDerivedStateFromProps(props, state)');
        return {
            test: []
        }
    }

    shouldComponentUpdate(){
        console.log('2. shouldComponentUpdate()');
        return true;
    }

    render() {
        console.log('3. render()');
        console.log(this.state);
        return (<div>
            {this.state.count}
            <button onClick={() =>{
                this.setState({count: ++this.state.count})
            }}>Увеличить счетчик</button>
            </div>
        );
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('4. getSnapshotBeforeUpdate(prevProps, prevState)');
        return null;
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('5. componentDidUpdate()');
    }

    componentDidMount(){
        console.log('4. componentDidMount()');
    }
}