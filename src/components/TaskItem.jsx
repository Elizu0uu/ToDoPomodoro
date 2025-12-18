import TaskContainerStyle from "../styles/TaskContainerStyle.module.css"
const TaskItem = ({currentTheme, task, toggleTask, deleteTask}) => {
    return (
        <div className = {`${TaskContainerStyle['list-organization']}`}>
            <input
                className= {`${TaskContainerStyle['list-input']}`}
                type = "checkbox"
                checked = {task.completed}
                onChange = {() => toggleTask(task.id)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through rgb(170, 34, 34)' : 'none' }}>
                {task.text}
            </span>
            <button 
                className={`${TaskContainerStyle['delete-button']}
                            ${TaskContainerStyle['input-theme-'+ currentTheme]}`}
                onClick={() => { deleteTask(task.id)}}
            >
                &times;
            </button>
        </div>
    )
}
export default TaskItem;