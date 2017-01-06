import React, { Component } from 'react';
import TodoList from 'TodoList';
import AddTodo from 'AddTodo';

export default class TodoApp extends Component {

    constructor() {
        super();

        this.handleAddTodo = this.handleAddTodo.bind(this);
        
        this.state = {
            todos: [
                {
                    id: 1,
                    text: 'Walk the dog'
                },
                {
                    id: 2,
                    text: 'Clean the yard'
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

    render(){
        let { todos } = this.state;
        return(
            <div>
                <TodoList todos={ todos } />
                <AddTodo onAddTodo={ this.handleAddTodo } />
            </div>
        )
    }
}