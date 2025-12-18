import { useState } from "react";
import TaskContainerStyle from "../styles/TaskContainerStyle.module.css";
import PomodoroTimerStyle from '../styles/PomodoroTimerStyle.module.css'
const TaskInput = ({currentTheme, handleAddTask}) => {
    const [inputValue, setInputValue] = useState('');
    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim() != ''){
            handleAddTask(inputValue);
            setInputValue('');
        }
    }

    return(
        <form 
            className = {`${TaskContainerStyle['add-task-form']}`}
            onSubmit= {handleSubmit}
        >
            <input
                className={`${TaskContainerStyle['add-task-input']}
                            ${TaskContainerStyle['input-theme-'+ currentTheme]}`}
                placeholder="Enter your task..."
                type= "text"
                value= {inputValue}
                onChange = {(e) => setInputValue(e.target.value)}
            />
            <button 
                className={`${TaskContainerStyle['add-task-button']} 
                            ${PomodoroTimerStyle['button-container']} 
                            ${PomodoroTimerStyle['button-theme-'+ currentTheme]}`}
                type="submit">
                    Add Task
            </button>
        </form>
    )
}
export default TaskInput;