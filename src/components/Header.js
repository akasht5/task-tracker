import React from 'react'
import Button from './Button'

const Header = ({ showAddTask,setAddForm }) => {
    return (
        <div className="header">
            <h2>Task Tracker</h2>
            <Button text={ showAddTask ? "Close" : "Add" } color={ showAddTask ? "black" : "blue" } onClick={setAddForm} />
        </div>
    )
}

export default Header
