import { useState } from 'react';
import { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Form from './components/Form';
import TodoItem from './components/TodoItem';

const Todo = () => {


    const [todos, setTodos] = useState([
        {
            title: 'Mateo',
            id: Math.random() * 0.88 + 6,
            completed:false,
        },
    ]);

    const addTodo = (todo) => {
        setTodos([...todos,todo]);
    }

    const removeTodo = (id) => {
        console.log(id)
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    return (
        <div className="App">
            <Form addTodo={addTodo} />
            {todos.map((todo) => (
                <TodoItem key={todo.id} todo={todo} removeTodo={removeTodo}/>
            ))}
            {!todos.length && <p>No todos</p>}
        </div>

    );


}

export default Todo;