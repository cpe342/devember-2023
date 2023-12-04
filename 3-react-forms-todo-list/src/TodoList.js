import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";
import uuid from 'uuid';

class TodoList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            todos: []
        };
        this.addTodo = this.addTodo.bind(this);
        this.removeTodo = this.removeTodo.bind(this);
        this.updateText = this.updateText.bind(this);
        this.toggleCompletion = this.toggleCompletion.bind(this);
    }

    // Add new todo based on form submission
    addTodo(todo) {
        let newTodo = { ...todo, id: uuid() }
        this.setState(state => ({
            todos: [...state.todos, newTodo]
        }))
    }

    // Remove todo based on id
    removeTodo(id) {
        this.setState(state => ({
            todos: state.todos.filter((e) => e.id !== id)
        }));
    }

    // Update text in todo based on id
    updateText(id, updatedText) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return {
                    ...todo,
                    text: updatedText
                }
            }
            return todo;
        });
        this.setState({ todos: updatedTodos })
    }

    toggleCompletion(id) {
        const updatedTodos = this.state.todos.map(todo => {
            if (todo.id === id) {
                return { ...todo, completed: !todo.completed };
            }
            return todo;
        });
        this.setState({ todos: updatedTodos });
    }

    render() {
        let todos = this.state.todos.map((e) =>
            <Todo
                id={e.id}
                key={e.id}
                text={e.text}
                completed={e.completed}
                // This is the non arrow function way of passing function from parent to child
                removeTodo={this.removeTodo}
                updateText={this.updateText}
                toggleTodo={this.toggleCompletion} // Check this line
            />
        );
        return (
            <div>
                <ul>
                {todos}
                </ul>
                <NewTodoForm
                    addTodo={this.addTodo}
                ></NewTodoForm>
            </div>
        );
    }
}
export default TodoList;