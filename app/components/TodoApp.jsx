import React, { Component } from 'react';
import uuid from 'uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends Component {

    constructor() {
        super();

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleSearch = this.handleSearch.bind(this);
        
        this.state = {
            showCompleted: false,
            searchText: '',
            todos: [
                {
                    id: uuid(),
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: uuid(),
                    text: 'Clean the yard',
                    completed: false
                }
            ]
        }
    }

    handleAddTodo(text) {
        let { todos } = this.state;
        this.setState({
            todos: [...this.state.todos, { id: uuid(), text }]
        });
    }
 
    handleSearch(showCompleted, searchText) {
        this.setState({ showCompleted, searchText: searchText.toLowerCase() });
    }

    render(){
        let { todos } = this.state;
        return(
            <div>
                <TodoSearch onSearch={ this.handleSearch } />
                <TodoList todos={ todos } />
                <AddTodo onAddTodo={ this.handleAddTodo } />
            </div>
        )
    }
}