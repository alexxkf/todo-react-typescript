import React, { useState } from 'react';
import '@patternfly/react-core/dist/styles/base.css';
import { TodoList } from './components/TodoList';
import { AddTodoForm } from './components/AddTodoForm'
import { Card } from '@patternfly/react-core';




const initialTodos: Array<Todo> = [
  {text: "Learn TypeScript", complete: true}, 
  {text: "Get Job at RedHat", complete: false}
];

const App: React.FC = () => {
  const [todos, setTodos] = useState(initialTodos); 

  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        }
      }
      return todo;
    });
    setTodos(newTodos);
  };

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== "" && 
    setTodos([...todos, { text: newTodo, complete: false }])
  }

  return (
    <Card>
      <React.Fragment>
        <TodoList todos={todos} toggleTodo={toggleTodo} />
        <AddTodoForm addTodo={addTodo}/>    
     </React.Fragment>
    </Card>
  )};

export default App;
