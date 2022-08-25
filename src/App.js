import { useState } from "react"
import Header from "./components/Header";
import Tasks from "./components/Tasks";

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
  
  return (
    <div className="container">
     <Header />
     {tasks.length >0 ? <Tasks tasks={tasks} onDelete= {deleteTask} /> : 'oooops! No tasks to show currently'}
      
    </div>
  );
}

export default App;
