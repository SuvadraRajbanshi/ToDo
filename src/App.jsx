import React, { useState, useEffect } from 'react'
import Header from './Components/Header';
import Tasks from './Components/Tasks';

const LOCAL_STORAGE_kEY = "todo:savedTasks";

const App = () => {
const [tasks, setTasks] = useState([]);

function loadSavedTasks() {
  const saved = localStorage.getItem(LOCAL_STORAGE_kEY );
  if(saved){
    setTasks(JSON.parse(saved));
  }
}

useEffect(() => {
  loadSavedTasks();
}, [])

function setTasksAndSave(newTasks){
  setTasks(newTasks);
  localStorage.setItem(LOCAL_STORAGE_kEY, JSON.stringify(newTasks));
}


function addTask(taskTitle){
  setTasksAndSave([
    ...tasks,
    {
      id: crypto.randomUUID(),
    title: taskTitle,
    isCompleted: false
    }
  ]);
}



function deleteTaskById(taskId){
  const newTasks = tasks.filter(task => task.id != taskId);
  setTasksAndSave(newTasks);
}


function toggleTaskCompletedById(taskId){
  const newTasks = tasks.map(task =>{
    if(task.id === taskId){
      return{
        ...task,
        isCompleted :!task.isCompleted
      }
    }
    return task;
  });
  setTasksAndSave(newTasks);
}


  return (
   <>
    <Header onAddTask={addTask}/>
    <Tasks 
    tasks={tasks}
    onDelete={deleteTaskById}
    onComplete={toggleTaskCompletedById}
    />
   </>
  )
}

export  default App;

