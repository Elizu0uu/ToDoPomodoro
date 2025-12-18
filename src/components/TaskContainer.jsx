import React from 'react';
import TaskItem from './TaskItem';
import TaskInput from './TaskInput';
import TaskContainerStyle from '../styles/TaskContainerStyle.module.css';
import PomodoroTimerStyle from '../styles/PomodoroTimerStyle.module.css'
const TaskContainer = ({currentTheme, tasks, setTasks, handleAddTask}) => {

    const deleteTask = (id) => {
        console.log("delete!!!"+ id)
        setTasks(prevTasks => prevTasks.filter((task) => {
           return task.id !== id 
        }))
    }
    const toggleTask = (id) => 
        {setTasks(prevTasks => prevTasks.map((task) => {
            if(task.id === id){
                return {
                    ...task,
                    completed: !task.completed
                };
            }
            return task;
        }));
    }
    return(
        <div>
            <TaskInput 
                currentTheme={currentTheme} 
                handleAddTask ={handleAddTask} 
            />
            <div className={`${PomodoroTimerStyle['theme-'+ currentTheme]}
                             ${TaskContainerStyle['list']}`}>
                <h1>To do list:</h1>
                {tasks.map( (task) => (
                    <TaskItem
                        currentTheme={currentTheme}
                        key={task.id}
                        task={task}
                        toggleTask={toggleTask}
                        deleteTask={deleteTask}
                    />
            ))}
            </div>
        </div>
    );
}
export default TaskContainer;