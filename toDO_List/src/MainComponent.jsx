import React, { useState } from 'react'


function MainComponent() {

    const [task, setTask] = useState([])
    const [newTask, setNewTask] = useState([]);

    const handleInputChange = (e) => {
        setNewTask(e.target.value)
    }

    const handleAddButton = () => {

       if(newTask.trim() !== ""){
            setTask(t => [...t, newTask])
            setNewTask("")
        }
        /*const newaAct = document.getElementById("new").value;
        setNewTask("");

        setTask(t => [...t, newaAct])*/

    }

    const handleRemoveButton = (index) => {
        const updatedTask = task.filter((element, i) => i !== index)
        setTask(updatedTask)
    }

    const handleUpButton = (index) =>{

        if(index > 0){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index - 1]] = [updatedTask[index - 1], updatedTask[index]];
            setTask(updatedTask);
        }
        
    }

    const handleDownButton = (index) => {
        
        if(index < task.length -1){
            const updatedTask = [...task];
            [updatedTask[index], updatedTask[index + 1]] = [updatedTask[index + 1], updatedTask[index]];
            setTask(updatedTask);
        }
    }

  return (
    <div className='to-do-container'>
        <h1>To-Do-List </h1>

        <input type='text' /*id="new"*/ placeholder='Enter a Task...' value={newTask} onChange={handleInputChange}></input>
        <button className='add-btn' onClick={handleAddButton}>ADD</button>

        <ul>
            {task.map((task, index) => <li key={index}>
                <div><span className='text'>{task}</span></div>
                <div><button className='dlt-btn btn1' onClick={() => handleRemoveButton(index)}>Delete</button>
                <button className='up-btn btn1' onClick={() => handleUpButton(index)}>🔼</button>
                <button className='down-btn btn1' onClick={() => handleDownButton(index)}>🔽</button></div>
                
                
            </li>)}
        </ul>
    </div>
  )
}

export default MainComponent