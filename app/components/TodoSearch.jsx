import React, { Component } from 'react';

export default class TodoSearch extends Component {

    constructor() {
        super();

        this.handleSearch = this.handleSearch.bind(this);

    }

    handleSearch(){
        this.props.onSearch(this.showCompleted.checked, this.searchText.value);
    }

    render(){
        return (
            <div>
                <div>
                    <input type="search" ref={ searchText => this.searchText = searchText } placeholder="Search todos" onChange={ this.handleSearch }/>
                </div>
                <div>
                    <label>
                        <input type="checkbox" ref={ showCompleted => this.showCompleted = showCompleted } onChange={ this.handleSearch }/>
                        Show Completed todos
                    </label>
                </div>
            </div>
        );
    }
}