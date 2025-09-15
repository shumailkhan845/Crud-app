import { useEffect, useState } from "react";
import axios from 'axios';
import { sendTask_API, getTask_API, deleteTask_API } from "./API_Route";

function App() {

  //Submitting tasks to backend
  const SubmitForm = () =>{   
      axios.post(sendTask_API,
        tasks
      )
    }

//Use state to the input 
const [tasks, setTasks] = useState({
    task: "",
  });
const handleChange = (event) => {
  setTasks({ ...tasks, [event.target.name]: event.target.value });
  };
    
  //Getting tasks from backend
const [getTask, setGetTask]=useState([]);
  useEffect(()=>{
    axios.get(getTask_API).then((response)=>{
      setGetTask(response.data)
    }).catch((error)=>{
      console.log(error)
    })
  },[])

//Deleting a task
const deleteTask = (id) =>{
  axios.delete(`${deleteTask_API}/${id}`).then(response=>
    console.log(response.data),
    setGetTask(prevTask=> prevTask.filter(task=>task._id!==id))
    
  ).catch(
    error => console.log("Error while deleting task ",error)
  )
}

  return (
    <>
    <h1>CRUD app in Mern</h1>
    <form onSubmit={SubmitForm} >
      <input type="text" placeholder="Enter your tasks" name="task" onChange={handleChange}/>
      <button type="submit">create</button>
    </form>

    <h3>My tasks</h3>
    {
      getTask.map((task)=>(
        <div key={task.id}>

          <p>{task.task}</p>
          <button onClick={(e)=>{deleteTask(task._id)}}>Delete</button>
        </div>
      ))
    }
    </>
  );
}

export default App;