import React, { Component } from 'react';

export default class TodoSearch extends Component {

    constructor() {
        super();

        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch(){
        let showCompleted = this.refs.showCompleted.checked;
        let searchText = this.refs.searchText.value;

        this.props.onSearch(showCompleted, searchText);
    }

    render(){
        return (
            <div>
                <div>
                    <input type="search" ref="searchText" placeholder="Search todos" onChange={ this.handleSearch }/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref="showCompleted" onChange={ this.handleSearch }/>
                        Show Completed todos
                    </label>
                </div>
            </div>
        );
    }
}