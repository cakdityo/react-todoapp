import React, { Component } from 'react';
import uuid from 'uuid';

import TodoList from 'TodoList';
import AddTodo from 'AddTodo';
import TodoSearch from 'TodoSearch';

export default class TodoApp extends Component {

    constructor() {
        super();

        this.handleAddTodo = this.handleAddTodo.bind(this);
        this.handleToggleTodo = this.handleToggleTodo.bind(this);
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
            todos: [
                ...this.state.todos,
                { id: uuid(), text, completed: false }
            ]
        });
    }

    handleToggleTodo(id) {
        let { todos } = this.state;
        this.setState({
            todos: todos.map((todo) => {
                if (todo.id === id) {
                    todo.completed = !todo.completed;
                }
                return todo;
            })
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
                <TodoList todos={ todos } onToggle={ this.handleToggleTodo } />
                <AddTodo onAddTodo={ this.handleAddTodo } />
            </div>
        )
    }
}