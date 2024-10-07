import React, { useState } from 'react'
import { IoIosRemoveCircle } from "react-icons/io";
import { MdEdit } from "react-icons/md";
import { FaCheck } from "react-icons/fa";
import '../App.css'
import TodoCreate from './TodoCreate';

function Todo({ todo, onRemove, onUpdate }) {
    const [editable, setEditable] = useState(false);
    //const [newTodo, setNewTodo] = useState(todo.content.content);
    const removeTodo = () => {
        onRemove(todo.id);
    }
    const handleEditClick = () => {
        setEditable(!editable);
    };
    const handleSubmit = (id, updatedContent) => {
        setEditable(false);
        onUpdate(id, updatedContent);
    };


    // const updateTodo = () => {
    //     if (!newTodo) return;
    //     // const request = {
    //     //     id: todo.id,
    //     //     content: newTodo,
    //     // }
    //     onUpdateTodo(todo.id, newTodo);
    //     setEditable(false);
    // }

    return (
        <div className='todo'>
            <div className='entered-todo'>
                {editable ? (<TodoCreate todo={todo} todoformUpdate={true} onUpdate={handleSubmit} />) : (todo.content)}
            </div>
            <div>
                <div>

                    <IoIosRemoveCircle className='icon' onClick={removeTodo} />
                </div>
                <div>
                    {
                        editable ? (<FaCheck className='icon' onClick={handleEditClick} />) : (<MdEdit className='icon' onClick={() => { setEditable(true) }} />)
                    }
                </div>
            </div>
        </div>
    );
}

export default Todo