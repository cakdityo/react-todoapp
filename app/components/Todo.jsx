import React, { Component } from 'react';

export default class Todo extends Component {
    render(){
        let { todo } = this.props;
        return (
            <div>
                { todo.id }. { todo.text }
            </div>
        );
    }
}