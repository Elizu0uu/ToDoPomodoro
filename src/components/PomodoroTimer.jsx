import React, {useState, useEffect} from 'react';
import PomodoroTimerStyle from '../styles/PomodoroTimerStyle.module.css'
import SettingsModal from './SettingsModal';
const PomodoroTimer = ({currentTheme}) => {

    const [isSettingsOpen, setIsSettingOpen] = useState(false);

    const [workDuration, setWorkDuration] = useState(25);
    const [breakDuration, setBreakDuration] = useState(5);
    const [seriesCount, setSeriesCount] = useState(3);

    const [isWorkPhase, setIsWorkingPhase] = useState(true);
    const [currentSeries, setCurrentSeries] = useState(1);

    const [isMessageVisible, setIsMessageVisible] = useState(false);

    const [timer, setTimer] = useState(workDuration*60);
    const [isRunning, setIsRunning] = useState(false)

    //Buttons setup
    const [activeControle, setActiveControle] = useState('');
    const handleStart = () => {
        setIsRunning(true);
        setActiveControle('start');
    }
    const handleStop = () => {
        setIsRunning(false);
        setActiveControle('stop');
    }
    const handleReset = () => {
        setIsRunning(false);
        setActiveControle('');
        setTimer(workDuration*60);
        setCurrentSeries(1);
    }

    //Time format
    const formatTime = (totalSeconds) => {
        const minutes = Math.floor(totalSeconds/60);
        const seconds = totalSeconds % 60;

        const formattedMinutes = String(minutes).padStart(2,'0');
        const formattedSeconds = String(seconds).padStart(2,'0');
        return `${formattedMinutes}:${formattedSeconds}`
    }

    useEffect(() => {
        if(isRunning && timer > 0){
            const interval = setInterval(() => {
                setTimer(prevTime => prevTime -1);
            },1000);

            return () => clearInterval(interval);
        }
        else if(isRunning && timer == 0){
            if(isWorkPhase){
                setIsWorkingPhase(false);
                setTimer(breakDuration*60);
            }
            else{
                if(currentSeries < seriesCount){
                    setCurrentSeries(prevSeries => prevSeries +1)
                    setIsWorkingPhase(true)
                    setTimer(workDuration*60);
                }
                else{
                    handleReset();
                    return;
                }
            }
            setIsRunning(false);
        }
        return () => {};        
    },[isRunning,timer]);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            setIsMessageVisible(true);
        }, 0);

        const hideTimeoutId = setTimeout(() => {
            setIsMessageVisible(false);
            if(activeControle === 'start'){
                setIsRunning(true);
            }
        }, 5000);

        return () => {
            clearTimeout(timeoutId);
            clearTimeout(hideTimeoutId);
        };
    },[isWorkPhase, currentSeries]);

    return (
        <div className={`${PomodoroTimerStyle['pomodoro-container']} ${PomodoroTimerStyle['theme-'+ currentTheme]}`}>
            <div className={`${PomodoroTimerStyle['setting-div']}`}>
                <h3 className={`${PomodoroTimerStyle['clock-series']}`}>{currentSeries} / {seriesCount}</h3>
                <button className={`${PomodoroTimerStyle['setting-button']}`} onClick={() => setIsSettingOpen(true)}>
                    <svg 
                        xmlns="http://www.w3.org/2000/svg"  
                        fill="currentColor" 
                        class="bi bi-gear-fill" 
                        viewBox="0 0 16 16">
                    <path d="M9.405 1.05c-.413-1.4-2.397-1.4-2.81 0l-.1.34a1.464 1.464 0 0 1-2.105.872l-.31-.17c-1.283-.698-2.686.705-1.987 1.987l.169.311c.446.82.023 1.841-.872 2.105l-.34.1c-1.4.413-1.4 2.397 0 2.81l.34.1a1.464 1.464 0 0 1 .872 2.105l-.17.31c-.698 1.283.705 2.686 1.987 1.987l.311-.169a1.464 1.464 0 0 1 2.105.872l.1.34c.413 1.4 2.397 1.4 2.81 0l.1-.34a1.464 1.464 0 0 1 2.105-.872l.31.17c1.283.698 2.686-.705 1.987-1.987l-.169-.311a1.464 1.464 0 0 1 .872-2.105l.34-.1c1.4-.413 1.4-2.397 0-2.81l-.34-.1a1.464 1.464 0 0 1-.872-2.105l.17-.31c.698-1.283-.705-2.686-1.987-1.987l-.311.169a1.464 1.464 0 0 1-2.105-.872zM8 10.93a2.929 2.929 0 1 1 0-5.86 2.929 2.929 0 0 1 0 5.858z"/>
                    </svg>
                </button>
            </div>
            {isSettingsOpen && (
                <SettingsModal
                    currentTheme={currentTheme}
                    onClose={() => setIsSettingOpen(false)}
                    workDuration = {workDuration}
                    setWorkDuration = {setWorkDuration}
                    breakDuration = {breakDuration}
                    setBreakDuration = {setBreakDuration}
                    seriesCount = {seriesCount}
                    setSeriesCount = {setSeriesCount}
                />
            )}
            <h1 className={`${PomodoroTimerStyle['clock']}`}>
                <span style = {{opacity: isMessageVisible ? 1 : 0}}>
                    {isWorkPhase ? 'Work' : 'Break'}
                </span>
            
                <span style = {{opacity: isMessageVisible ? 0 : 1, position: 'absolute'}}>
                    {formatTime(timer)}
                </span>  
            </h1>
            
            <div className={PomodoroTimerStyle['button-organization']}>
                <button className={`${PomodoroTimerStyle['button-theme-'+ currentTheme]} 
                                    ${PomodoroTimerStyle['button-container']} 
                                    ${activeControle==='start' ? 'active' : ''}`}
                        onClick = {handleStart}
                >
                    Start
                </button>
                <button className={`${PomodoroTimerStyle['button-container']} 
                                    ${PomodoroTimerStyle['button-theme-'+ currentTheme]}`}
                        onClick={handleStop}
                >
                    Stop
                </button>
                <button className={`${PomodoroTimerStyle['button-container']} 
                                    ${PomodoroTimerStyle['button-theme-'+ currentTheme]}`}
                        onClick={handleReset}
                >
                    Reset
                </button>
            </div>
        </div>
    );
};
export default PomodoroTimer;