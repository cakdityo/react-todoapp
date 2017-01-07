import React, { Component } from 'react';

export default class Todo extends Component {
    render(){
        let { todo } = this.props;
        return (
            <div className={ todo.completed ? 'completed' : '' } onClick={ () => { this.props.onToggle(todo.id) } }>
                <input type="checkbox" checked={ todo.completed } readOnly />
                { todo.text }
            </div>
        );
    }
}