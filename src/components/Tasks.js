import React from 'react'
import Task from './Task'

const Tasks = ({ tasks,onDelete,toggleReminder }) => {
    

    return (
        <>
         {
             tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} toggleReminder={toggleReminder} />
             ))
         }   
        </>
    )
}

export default Tasks
