import React, { Component } from 'react';
import TodoList from 'TodoList';

export default class TodoApp extends Component {

    constructor() {
        super();
        
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

    render(){
        let { todos } = this.state;
        return(
            <div>
                <TodoList todos={ todos } />
            </div>
        )
    }
}