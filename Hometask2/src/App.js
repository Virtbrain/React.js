import React from 'react'
import ReactDom from 'react-dom'
import Developer from "./developer"
import css from "./style.css"

let Dev = new Developer("Мананков Алексей","JS");

class App extends React.Component{
    render(){
        return <div><h1>Первое приложение на React</h1><p>Hello React!</p><p>Имя разработчика: {Dev.name}</p><p>Язык программирования:{Dev.lang}</p></div>
    }
}

ReactDom.render(<App/>, document.getElementById('root'))