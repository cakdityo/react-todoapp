import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import TodoApp from 'TodoApp';

describe('TodoApp', () => {

    it('should exist', () => {
        expect(TodoApp).toExist();
    });

    it('should add todo to the todos state on handleAddTodo', () => {
        let todoText = 'Swimming';
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);

        todoApp.setState({ todos: [] });
        todoApp.handleAddTodo(todoText);

        expect(todoApp.state.todos[0].text).toBe('Swimming');
    });

    it('should toggle todo complete for the given id', () => {
        let todoApp = TestUtils.renderIntoDocument(<TodoApp />);
        todoApp.setState({
            todos: [
                {
                    id: 1,
                    text: 'Swimming',
                    completed: false
                },
                {
                    id: 2,
                    text: 'Sleeping',
                    completed: true
                }
            ]
        });
        expect(todoApp.state.todos[1].completed).toBe(true);
        todoApp.handleToggleTodo(2);
        expect(todoApp.state.todos[1].completed).toBe(false);
    });

});