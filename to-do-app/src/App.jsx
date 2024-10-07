import { useState, useEffect } from 'react'
import axios from 'axios';
import './App.css'
import TodoCreate from './components/TodoCreate'
import TodoList from './components/TodoList'

function App() {

  const [todos, setTodos] = useState([]);

  const createTodo = async (content) => {
    const response = await axios.post('http://localhost:3004/todos', { content, });

    setTodos([...todos, response.data]);
  }

  const fetchTodos = async () => {
    const response = await axios.get('http://localhost:3004/todos');

    setTodos(response.data);
  };

  useEffect(() => {
    fetchTodos();
  }, []);

  const removeTodo = async (todoId) => {
    await axios.delete(`http://localhost:3004/todos/${todoId}`);
    setTodos([...todos.filter((todo) => todo.id !== todoId)]);
  }

  const updateTodo = async (todoId, updatedContent) => {
    await axios.put(`http://localhost:3004/todos/${todoId}`, {
      content: { content: updatedContent },
    });
    const updatedTodos = todos.map((todo) => {
      if (todo.id === todoId) {
        return { ...todo.content, content: updatedContent };

      }
      return todo;

    })
    setTodos(updatedTodos);
  }
  return (
    <div className='app'>

      <TodoCreate onCreate={createTodo} />
      <TodoList todos={todos} onRemove={removeTodo} onUpdate={updateTodo} />
    </div>
  )
}

export default App
