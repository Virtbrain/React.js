import React from 'react';
import Search from './Search';
import Categories from './Categories';
import SideWidget from './SideWidget';

const categories = ["Web Design","HTML","Freebies","JavaScript","CSS","Tutorials"];
const side = {title: "Side Widget", text: "You can put anything you want inside of these side widgets. They are easy to use, and feature the new Bootstrap 4 card containers!"};

export default class Main extends React.Component {
    
    render(){

        let postItems = this.props.items.map((item, index) => {
            return (
                <div className="card mb-4" key={index}>
                    <img className="card-img-top" src={item.image} alt="Card image cap" />
                    <div className="card-body">
                        <h2 className="card-title">{item.title}</h2>
                        <p className="card-text">{`${item.text.substr(0,150)}...`}</p>
                        <a href="#" className="btn btn-primary">Read More →</a>
                    </div>
                    <div className="card-footer text-muted">
                        Posted on {item.postDate} by
                        <a href="#"> Start Bootstrap</a>
                    </div>
                </div>
            )
        })

        return (
            <div className="container">
                <div className="row">
                    <div className="col-md-8">
                        <h1>Page Heading <small>Secondary Text</small></h1>
                        {postItems}
                        <ul className="pagination justify-content-center mb-4">
                            <li className="page-item">
                            <a className="page-link" href="#">← Older</a>
                            </li>
                            <li className="page-item disabled">
                            <a className="page-link" href="#">Newer →</a>
                            </li>
                        </ul>
                    </div>

                    <div className="col-md-4">
                        {<Search/>}
                        {<Categories items={categories}/>}
                        {<SideWidget items={side}/>}
                    </div>
                </div>
            </div>
        )
    }
}