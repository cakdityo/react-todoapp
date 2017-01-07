import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import Todo from 'Todo';

describe('Todo', () => {
    
    it('should exist', () => {
        expect(Todo).toExist();
    });

    it('should call onToggle with todo id', () => {
        let myTodo = { id: 9012309213, text: 'Eat lunch', completed: true };
        let spy = expect.createSpy();
        let todo = TestUtils.renderIntoDocument(<Todo todo={ myTodo } onToggle={ spy } />);
        let $el = $(ReactDOM.findDOMNode(todo));

        TestUtils.Simulate.click($el[0]);

        expect(spy).toHaveBeenCalledWith(9012309213);
    });
});