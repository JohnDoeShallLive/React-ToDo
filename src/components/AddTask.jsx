import { useState ,useContext, useEffect } from "react";
import { v4 as uuidv4 } from 'uuid';
import TaskContext from "../context/TaskContext";

function AddTask() {
 
  const [btnDisabled, setBtnDisabled] = useState(true)
  const [message, setMessage] = useState('')
  const [text, setText] = useState('')

  const {task ,addTask , taskEdit ,updateTask} = useContext(TaskContext)

useEffect(() => {
if(taskEdit.edit === true) {
  setBtnDisabled(false)
  setText(taskEdit.item.name)
}
}, [taskEdit])


  const handleTextChange = ({ target: { value } }) => { // 👈  get the value
    if (value === '') {
      setBtnDisabled(true)
      setMessage(null)
      
  // prettier-ignore
    } else if (value.trim().length < 5) { // 👈 check for less than 10
      setMessage('Text must be at least 10 characters')
      setBtnDisabled(true)
    } else {
      setMessage(null)
      setBtnDisabled(false)
    }
    setText(value)
  }


  const handleSubmit = (e) => {
    e.preventDefault();

    const date = new Date()

    const newTask = {
      id: uuidv4(),
      name: text,
      time:`${date.toLocaleTimeString()}  ${date.toLocaleDateString()}`
    }

    if(taskEdit.edit === true ){
      updateTask(taskEdit.item.id ,newTask)
    }else{
      addTask(newTask)
    }
   
    setText('')
    setBtnDisabled(true)
    
  };

  return (
    <section className="addTask">
      <form 
      onSubmit={handleSubmit}>
        <input
          type="text"
          name="task"
          value={text}
          onChange={handleTextChange}
          placeholder="Add Task"
          autoComplete="off"
          maxLength={25}
          
        />

        <button type="submit" disabled={btnDisabled}  className="btn">
         {taskEdit.edit === false ? "Add Task" : "Update"} 
          </button>
      </form>
    </section>
  );
}

export default AddTask;
