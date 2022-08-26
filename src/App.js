import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";

function App() {
  const [tasks, setTasks] = useState([
    {
     id: 1,
     text: 'Doctors Appointment',
     day: 'Monday',
     reminder: true,
    },
    {
     id: 2,
     text: 'Coding',
     day: 'Tuesday',
     reminder: true,
    },
    {
     id: 3,
     text: 'Pushups',
     day: 'Friday',
     reminder: false,
    }
   ])

   //delete task
   const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id))
   }

   //Togglr reminder
   const toggleReminder = (id) => {
    setTasks(tasks.map((task) => task.id === id ? {...task, reminder: !task.reminder} : task))
   }
  
  return (
    <div className="container">
     <Header />
     <AddTask />
     {tasks.length >0 ? <Tasks tasks={tasks} 
     onDelete= {deleteTask} onToggle={toggleReminder} /> : 'oooops! No tasks to show currently'}
      
    </div>
  );
}

export default App;
