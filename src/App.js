import { useState,useEffect } from 'react'
import { BrowserRouter as Router,Route } from 'react-router-dom'

import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'
import About from './components/About'
import Footer from './components/Footer'

import './App.css';

function App() {
  const [showAddTask,setShowAddTask] = useState(true);
  const [tasks,setTasks] = useState([]);

  useEffect(() => {
    const getTasks = async () => {
      const taskList = await fetchTasks();
      setTasks(taskList);
    }

    getTasks();
  },[])

  const fetchTasks = async () => {
    const res = await fetch(`http://localhost:5000/tasks`);
    const data = await res.json();
    
    return data;
  }

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  }

  const onAdd = async (item) => {
    if(item.text === ''){
      alert('Text should not be empty !');
      return
    }

    const res = await fetch(`http://localhost:5000/tasks`,{
        method : 'POST',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(item)
    })

    const data = await res.json();
    
    setTasks([...tasks,data]);
  }

  const deleteTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`,{
      method : 'DELETE'
    });

    res.status === 200
      ? setTasks(tasks.filter(task => task.id !== id ))
      : alert('Error deleting the task !');
  }

  const setAddForm = () => {
    setShowAddTask(!showAddTask); 
  }

  const onToggleReminder = async (id) => {
      const taskToToggle = await fetchTask(id);

      const newTask = {...taskToToggle,reminder:!taskToToggle.reminder}

      const res = await fetch(`http://localhost:5000/tasks/${id}`,{
        method : 'PUT',
        headers : {
          'Content-Type' : 'application/json'
        },
        body : JSON.stringify(newTask)
      })

      const data = await res.json();

      setTasks(tasks.map(task => (
        task.id === id ? data : task
      )))
  }

  return (
    <Router>
      <div className="container" style={{ userSelect:"none" }}>
        
        <Header showAddTask={showAddTask} setAddForm={setAddForm} />
        
        <Route exact path='/' render={
          (props) => (
            <>
              {
                showAddTask && ( <AddTask onAdd={onAdd}  /> )
              }
            
              { 
                tasks.length > 0 ? (
                <Tasks tasks={tasks} onDelete={deleteTask} toggleReminder={onToggleReminder} />
                ) : (
                'No Tasks To Show !'
                )
              }
              
            </>
          )
        } />
        
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}

export default App;
