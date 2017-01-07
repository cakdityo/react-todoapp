import React, { Component } from 'react';

import Todo from 'Todo';

export default class TodoList extends Component {
    render(){
        let { todos } = this.props;

        let renderTodos = () => {
            return todos.map((todo) => {
                return (<Todo key={ todo.id } onToggle={ this.props.onToggle } todo={ todo } />)
            });
        }

        return (
            <div>
                { renderTodos() }
            </div>
        );
    }
}