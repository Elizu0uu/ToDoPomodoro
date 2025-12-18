import PomodoroTimer from "./components/PomodoroTimer"
import ThemeSelector from "./components/ThemeSelector"
import TaskContainer from "./components/TaskContainer"
import {useState} from 'react'
function App() {
  
  const [currentTheme, setCurrentTheme] = useState('default');
  const [tasks, setTasks] = useState([]);
  const handleAddTask = (taskText) => {
    const newTask ={
      id: Date.now(),
      text: taskText,
      completed: false
    };
    setTasks([...tasks,newTask]);
  };

  return (
    <div className="app-container">
      <ThemeSelector onThemeChange={setCurrentTheme} />
      <PomodoroTimer currentTheme={currentTheme}/>
      <TaskContainer
        currentTheme={currentTheme} 
        tasks={tasks} 
        setTasks={setTasks}
        handleAddTask={handleAddTask}
      />
    </div>
  )
}

export default App;
