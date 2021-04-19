import React, { ChangeEvent, useState } from 'react'
import '@patternfly/react-core/dist/styles/base.css';
import { FormEvent } from 'react';
import { Button } from '@patternfly/react-core';


interface AddTodoFormProps {
    addTodo: AddTodo;
}

export const AddTodoForm: React.FC<AddTodoFormProps> = ({ addTodo }) => {

    const [newTodo, setNewTodo] = useState("");

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        setNewTodo(e.target.value);
    }

    const handleSubmit = (e: FormEvent<HTMLButtonElement>) => {
        e.preventDefault();
        addTodo(newTodo);
        setNewTodo("");

    }
    
    return (
        <form>
            <input type='text' value={newTodo} onChange={handleChange} />
            <Button variant="primary" type='submit' onClick={handleSubmit}>
                Add Todo
            </Button>
        </form>
    )
}