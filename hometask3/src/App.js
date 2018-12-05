import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Login';
import Menu from './Menu';
import Developer from './developer';

class App extends React.Component {
    render() {
        const menuItems = [
            {href:"/", title:"Main page"},
            {href:"/about", title:"About"},
            {href:"/service", title:"Service"},
            {href:"/contacts", title:"Contacts"},
        ]
    
    return ( <Menu titleMenu="React" items={menuItems}/>
         <LoginForm/>)
}}

ReactDom.render(<App/>, document.getElementById('root'))