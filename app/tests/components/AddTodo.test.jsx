import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import expect from 'expect';
import $ from 'jQuery';

import AddTodo from 'AddTodo';

describe('AddTodo', () => {

    it('should exist', () => {
        expect(AddTodo).toExist();
    });

    it('should call onAddTodo prop with valid data', () => {
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy }/>);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = 'Check mail!';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toHaveBeenCalledWith('Check mail!');
    });

    it('should not call onAddTodo when input is invalid', () => {
        let spy = expect.createSpy();
        let addTodo = TestUtils.renderIntoDocument(<AddTodo onAddTodo={ spy } />);
        let $el = $(ReactDOM.findDOMNode(addTodo));

        addTodo.refs.todoText.value = '';
        TestUtils.Simulate.submit($el.find('form')[0]);

        expect(spy).toNotHaveBeenCalled();
    });
});