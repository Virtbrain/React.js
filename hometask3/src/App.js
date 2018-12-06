import React from 'react'
import ReactDom from 'react-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import LoginForm from './Login';
import Menu from './Menu';
import Footer from './Footer';
import css from './style.css';



class App extends React.Component {
    render() {
        const menuItems = [
            {href:"/", title:"Main page"},
            {href:"/about", title:"About"},
            {href:"/service", title:"Service"},
            {href:"/contacts", title:"Contacts"},
        ]

        const page = (<main>
            <Menu titleMenu="React" items={menuItems}/>
            <LoginForm/>
            <Footer/>
            </main>
        )
    
    return (page)
}}

ReactDom.render(<App/>, document.getElementById('root'))