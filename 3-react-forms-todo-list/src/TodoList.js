import React, { Component } from "react";
import NewTodoForm from "./NewTodoForm";
import Todo from "./Todo";

class TodoList extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <Todo></Todo>
                <NewTodoForm></NewTodoForm>
            </div>
        );
    }
}
export default TodoList;