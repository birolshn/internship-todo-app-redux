import React, { useState } from 'react'
import '../App.css'

function TodoCreate({ onCreate, todo, todoformUpdate, onUpdate }) {

    const [content, setContent] = useState(todo ? todo.content : '');

    // const clearInput = () => {
    //     setNewTodo('');
    // }
    const handleChange = (event) => {
        setContent(event.target.value);
    };


    const handleSubmit = (event) => {
        event.preventDefault();
        if (todoformUpdate) {
            onUpdate(todo.id, content);
        } else {
            onCreate(content);
        }

        setContent('');

    };


    // const createTodo = () => {
    //     if (!newTodo) return;

    //     const request = {
    //         id: Math.floor(Math.random() * 999999),
    //         content: newTodo,
    //     }
    //     onCreateTodo(request);
    //     clearInput();


    // }
    return (
        <div>
            {' '}
            {
                todoformUpdate ? (
                    <div className="todo-update">
                        <h3>Görev Durumunu Düzenleyiniz!</h3>
                        <form className="todo-form">
                            <label className="todo-label">Görevi Düzenleyiniz</label>
                            <input
                                value={content}
                                onChange={handleChange}
                                className="input"
                            />

                            <button
                                className="todo-button"
                                onClick={handleSubmit}
                            >
                                Düzenle
                            </button>
                        </form>
                    </div>
                ) : (
                    <div className='todo-create'>
                        <div className='input-div'>
                            <h1>Görev Girin</h1>
                            <input value={content} onChange={handleChange} className='input' type="text" />
                        </div>
                        <div>
                            <button onClick={handleSubmit} className='create-button'>Oluştur</button>
                        </div>
                    </div>
                )
            }
        </div>
        // <div className='todo-create'>
        //     <div className='input-div'>
        //         <h1>Görev Girin</h1>
        //         <input value={newTodo} onChange={(e) => setNewTodo(e.target.value)} className='input' type="text" />
        //     </div>
        //     <div>
        //         <button onClick={createTodo} className='create-button'>Oluştur</button>
        //     </div>
        // </div>
    )
}

export default TodoCreate