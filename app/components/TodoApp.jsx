import React, { Component } from 'react';

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
                    id: 1,
                    text: 'Walk the dog',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Clean the yard',
                    completed: false
                }
            ]
        }
    }

    handleAddTodo(text) {
        let { todos } = this.state;
        this.setState({
            todos: todos.concat({ id: Math.floor(Math.random() * 1000), text })
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