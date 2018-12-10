import React from 'react';

export default class Categories extends React.Component {

    render(){
        console.log(this.props.items);
        let leftSide=[]
        this.props.items.forEach((item, index) => {
            console.log(`${index} -> ${item}`)
            if(index<3){
                return leftSide.push(<li key={index}><a href="#">{item}</a></li>)
            }
        });

        let rightSide=[]
        this.props.items.forEach((item, index) => {
            console.log(`${index} -> ${item}`)
            if(index>=3){
                return rightSide.push(<li key={index}><a href="#">{item}</a></li>)
            }
        });

        return (
            <div className="card my-4">
                <h5 className="card-header">Categories</h5>
                <div className="card-body">
                    <div className="row">
                        <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                            {leftSide}
                        </ul>
                        </div>
                        <div className="col-lg-6">
                        <ul className="list-unstyled mb-0">
                            {rightSide}
                        </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}