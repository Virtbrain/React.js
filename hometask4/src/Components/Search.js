import React from 'react';

export default class Search extends React.Component {

    render(){
        return (
            <div className="card my-4">
                <h5 className="card-header">Search</h5>
                <div className="card-body">
                    <div className="input-group">
                        <input className="form-control" type="text" placeholder="Search for..." />
                        <span className="input-group-btn">
                            <button className="btn btn-secondary" type="button">Go!</button>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}