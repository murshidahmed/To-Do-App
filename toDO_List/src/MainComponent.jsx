import React, { useState } from 'react'


function MainComponent() {

    const [task, setTask] = useState(["Eat"])
    const [newTask, setNewTask] = useState([]);

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleAddButton = () => {
        setTask(t => [...t, newTask])
    }

  return (
    <div className='to-do-container'>
        <h1>To-Do-List </h1>

        <input type='text' placeholder='Enter a Task...' value={newTask} onChange={handleInputChange}></input>
        <button className='add-btn' onClick={handleAddButton}>ADD</button>

        <ul>
            {task.map((task, index) => <li key="index">
                <div><span className='text'>{task}</span></div>
                <div><button className='dlt-btn btn1'>Delete</button>
                <button className='up-btn btn1'>🔼</button>
                <button className='down-btn btn1'>🔽</button></div>
                
                
            </li>)}
        </ul>
    </div>
  )
}

export default MainComponent