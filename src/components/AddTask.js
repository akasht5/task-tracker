import React,{ useState } from 'react'

const AddTask = ({ onAdd }) => {
    const [text,setText] = useState('');
    const [day,setDay] = useState('');
    const [reminder,setReminder] = useState(false);

    const onSubmit = (e) => {
        e.preventDefault();

        const id = Math.floor((Math.random().toFixed(2)*100)+1);

        const newTask = {
            id,
            text,
            day,
            reminder
        }

        onAdd(newTask);

        setText('');
        setDay('');
        setReminder(false);
    }

    return (
        <form className="add-form" onSubmit={onSubmit}>
            <div className="form-control">
                <label>Task</label>
                <input type="text" placeholder="Add task" value={text} onChange={(e) => setText(e.target.value)} />
            </div>
            <div className="form-control">
                <label>Day and Time</label>
                <input type="text" placeholder="Add day and time" value={day} onChange={(e) => setDay(e.target.value)} />
            </div>
            <div className="form-control form-control-check">
                <label>Set remainder</label>
                <input type="checkbox" value={reminder} checked={reminder} onChange={(e) => setReminder(e.currentTarget.checked)} />
            </div>

            <input type="submit" className="btn btn-block" />
        </form>
    )
}

export default AddTask
