import React from 'react'
import Button from './Button'
import { useLocation } from 'react-router-dom'

const Header = ({ showAddTask,setAddForm }) => {
    const location = useLocation();

    return (
        <div className="header">
            <h2>Task Tracker</h2>
            {
                location.pathname === '/' && (
                    <Button text={ showAddTask ? "Close" : "Add" } color={ showAddTask ? "black" : "blue" } onClick={setAddForm} />
                )
            }
            
        </div>
    )
}

export default Header
