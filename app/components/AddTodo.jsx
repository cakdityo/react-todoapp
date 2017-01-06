import React, { Component } from 'react';

export default class AddTodo extends Component {

    constructor() {
        super();

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(e) {
        e.preventDefault();
        let { todoText } = this.refs;

        if (todoText.value.length > 0) {
            this.props.onAddTodo(todoText.value);
            todoText.value = '';
        }
    }

    render() {
        return (
            <div>
                <form onSubmit={ this.handleSubmit }>
                    <input type="text" placeholder="Add Todo" ref="todoText"/>
                    <button>Add</button>
                </form>
            </div>
        );
    }
}