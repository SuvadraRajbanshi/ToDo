import todologo from '../../assets/todo2.png';
import { AiOutlinePlusCircle } from 'react-icons/ai'; 
import React, { useState } from 'react';
import styles from './header.module.css';

const Header = ({onAddTask}) => {
const [title, setTitle] = useState('');


function handleSubmit(event){
  event.preventDefault();
  onAddTask(title);
  setTitle('');
}

function onChangeTitle(event){
  setTitle(event.target.value);
}

  return (
   <header className={styles.header}>
<img src={todologo}/>
    
    <form onSubmit={handleSubmit} className={styles.newTaskForm}>
      <input type="text" placeholder='add a new task' value={title} onChange={onChangeTitle}/>
      <button>
        Create
        <AiOutlinePlusCircle size={20}/>
        </button>
    </form>
   </header>
  )
}

export default Header;
