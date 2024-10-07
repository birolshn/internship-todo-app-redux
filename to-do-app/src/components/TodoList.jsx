import React from 'react'
import Todo from './Todo'

function TodoList({ todos, onRemove, onUpdate }) {
    return (
        <div className='todo-list'>
            {
                todos.map((todo) => {
                    return (
                        <Todo key={todo.id} todo={todo} onRemove={onRemove} onUpdate={onUpdate} />
                    )
                })
            }

        </div>
    );
}

export default TodoList