import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import css from "./css/style.css";
import Header from './Components/Header';
import Main from './Components/Main';
import Footer from './Components/Footer';

const app = document.getElementById('root');
const headerItems = ["Home", "About", "Services", "Contact"];

//На самом деле мы должны были сходить базу и достать все это но раз базы нет то генерируем
const postText = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorum, velit porro? Vero libero consequuntur dolorum, maxime culpa veritatis fugit explicabo eligendi itaque quia, aliquam reiciendis qui atque ut laboriosam rem! Pariatur doloremque blanditiis reprehenderit officiis aspernatur commodi, similique accusantium quia voluptate explicabo nihil molestias rerum et voluptatem dolorem perspiciatis id nisi totam numquam voluptatibus, a itaque obcaecati? Saepe, eligendi laudantium. Recusandae tempore autem unde. Voluptatem nemo tenetur neque odio itaque praesentium iusto perspiciatis nihil et quos soluta esse quae, rem pariatur! Unde, totam a doloremque molestias provident temporibus tempore quod. Qui dolor recusandae magni corrupti sit, quas facilis omnis libero quo placeat laboriosam eius beatae vitae delectus maxime numquam doloremque dolorem? Maiores ipsa similique ex aut voluptatibus natus necessitatibus ab? Fugiat nostrum eaque qui dolor odio, neque cupiditate perferendis voluptate quas. Nulla debitis, cum eum nemo aspernatur delectus sed magnam modi id, iure, fuga quisquam sequi voluptas libero natus necessitatibus.';
let posts = []
for (let i=1; i<=3; i++){
    posts.push({image: './img/750x300.png', title: 'Post Title', text: postText, postDate: "January 1, 2017"})
}
//Конец генерации

ReactDOM.render(
    <div className="app">
        <Header items = {headerItems}/>
        <Main items = {posts}/>
        <Footer/>
    </div>
, app)