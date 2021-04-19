import React from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { Card } from '@patternfly/react-core';


interface TodoListItemProps {
    todo: Todo;
    toggleTodo: ToggleTodo;
}
export const TodoListItem: React.FC<TodoListItemProps> = ({ todo, toggleTodo }) => {
    return <Card> <li>
        <label style={{ textDecoration: todo.complete ? "line-through" : "none" }}>
            <input type='checkbox' 
            checked={todo.complete} 
            onChange={() => toggleTodo(todo)}/>
            {todo.text}
            </label>
            </li>
            </Card>
};