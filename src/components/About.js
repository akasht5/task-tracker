import React from 'react'
import { Link } from 'react-router-dom'

const About = () => {
    return (
        <div>
            <h4>Version 1.0.0</h4>
            <p>This is a mini task tracking app build with React.js and JSON server for mock REST API where user can add,delete and add reminder to tasks(By Double clicking on it).</p><br/>
            <Link to='/'>Go Back</Link>
        </div>
    )
}

export default About
