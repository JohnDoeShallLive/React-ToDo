import {  createContext ,useEffect,useState } from "react";

const TaskContext = createContext()

export const TaskProvider = ({children}) => {
    const [task , setTask] = useState( JSON.parse(localStorage.getItem('task')) || [])

    const [taskEdit , setTaskEdit] = useState({
        item : {} ,
        edit :false
    })


    //add Task

    const addTask = (newTask)=> {
       
        setTask([...task ,newTask])
 
    }
    useEffect(() => {
        localStorage.setItem('task',JSON.stringify(task))
    }, [task])

    //set item to be updated
    const editTask = (item) => {
        setTaskEdit({
            item,
            edit: true
        })
    }

    //update task item

const updateTask = (id ,updTask) =>{

    setTask(
        task.map((item) =>( 
            item.id === id ?  updTask  : item
        ))
    )

    //on reinitialse edit
   setTaskEdit({
        item: {},
        edit: false,
      })

}

    //deleAll
    const clearAll = () => { 
         setTask([])
    }

    const deleteTask = (id) =>{
        
        if (window.confirm("Are you sure you want to delete the task ?")){
            setTask(task.filter((tsk)=>tsk.id !== id))
        }
    }
 
    
    return <TaskContext.Provider value={{
        task,
        taskEdit,
        addTask,
        clearAll,
        deleteTask,
        editTask,
        updateTask
    }}>

        {children}
    </TaskContext.Provider>
}

export default TaskContext