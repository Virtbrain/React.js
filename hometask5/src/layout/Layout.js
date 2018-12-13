import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router';

const headerItems = [
    {name:'Главная', path:'/'}, 
    {name: 'Блог', path:'/blogs'},
    {name: 'Комментарии', path:'/comments'},
    {name: 'Пользователи', path: '/users'}];

const author = 'Мананков Алексей';

export default class Layout extends React.Component{
    render(){
        return(
            <div className="wrapper">
                <Header items = {headerItems}/>
                <main className="container">
                    <div className="col-12">
                            {this.props.children}
                    </div>
                </main>
                <Footer items = {author}/>
            </div>
        );
    }
}