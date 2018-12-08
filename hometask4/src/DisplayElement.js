import React from 'react';

export default class DisplayElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            display: false
        };
    }

    render() {

        let newsBlock;
        if(this.state.display){
            newsBlock = <div>
                            <h3>Новость</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut, molestias!</p>
                        </div>;
        }

        return (
            <div>
                <h2 className="link" onClick={() =>{
                    this.setState({display: !this.state.display});
                }}>Скрыть/показать новость</h2>
                {newsBlock}
            </div>
        );
    }
}