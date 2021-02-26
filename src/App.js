import { useState } from 'react'
import './App.css';
import Header from './components/Header'
import AddTask from './components/AddTask'
import Tasks from './components/Tasks'

function App() {
  const [showAddTask,setShowAddTask] = useState(true);
  const [tasks,setTasks] = useState([
    {
        id : 1,
        text : "Go for a run",
        day : "16 Feb 2021 21:38",
        reminder : true
    },
    {
        id : 2,
        text : "Buy shoes",
        day : "21 Feb 2021 21:38",
        reminder : true
    },
    {
        id : 3,
        text : "Finish your work",
        day : "27 Feb 2021 21:38",
        reminder : false
    }
  ]);

  const onAdd = (item) => {
    if(item.text === ''){
      alert('Text should not be empty !');
      return
    }
    setTasks([...tasks,item]);
  }

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => ( task.id !== id )));
  }

  const setAddForm = () => {
    setShowAddTask(!showAddTask);
    
  }


  return (
      <div className="container">
        <Header showAddTask={showAddTask} setAddForm={setAddForm} />
        {
          showAddTask && ( <AddTask onAdd={onAdd}  /> )
        }
            
          
        {tasks.length > 0 ? (
            <Tasks tasks={tasks} onDelete={deleteTask} />
        ) : (
          'No Tasks To Show !'
        )}
        
      </div>
  );
}

export default App;
