import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import {Link} from 'react-router';

const headerItems = [
    {name:'Главная', path:'/'}, 
    {name: 'Блог', path:'/blog'},
    {name: 'Комментарии', path: '/comments'},
    {name: 'Пользователи', path: '/users'}];

const author = 'Мананков Алексей';

export default class Layout extends React.Component{
    render(){
        return(
            <div>
                <Header items = {headerItems}/>
                <div className="col-12">
                        {this.props.children}
                </div>
                <Footer items = {author}/>
            </div>
        );
    }
}