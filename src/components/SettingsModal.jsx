import SettingsModalStyle from '../styles/SettingsModalStyle.module.css'
import PomodoroTimerStyle from '../styles/PomodoroTimerStyle.module.css'
const SettingsModal = ({
    currentTheme,
    onClose,
    workDuration, setWorkDuration,
    breakDuration, setBreakDuration,
    seriesCount, setSeriesCount
}) => {
    return (
        <div className={`${SettingsModalStyle['modal-backdrop']}`}>
            <div className={`${SettingsModalStyle['modal-content']}`}>
                <h2>Timer's Settings</h2>
                <div className={`${SettingsModalStyle['setting-item']}`}>
                    <label>Work Time</label>
                    <input
                        type="number"
                        value={workDuration}
                        onChange={(e) => setWorkDuration(parseInt(e.target.value)) || 1}
                        min="1"
                    />
                </div>
                <div className={`${SettingsModalStyle['setting-item']}`}>
                    <label>Break Time</label>
                    <input
                        type="number"
                        value={breakDuration}
                        onChange={(e) => setBreakDuration(parseInt(e.target.value)) || 1}
                        min="1"
                    />
                </div>
                <div className={`${SettingsModalStyle['setting-item']}`}>
                    <label>Series Count</label>
                    <input
                        type="number"
                        value={seriesCount}
                        onChange={(e) => setSeriesCount(parseInt(e.target.value)) || 1}
                        min="1"
                    />
                </div>
                <button className={`${PomodoroTimerStyle['button-theme-'+ currentTheme]}
                                    ${PomodoroTimerStyle['button-container']}`} 
                        onClick={onClose}
                >
                    Save & Close
                </button>
            </div>
        </div>
    )
}
export default SettingsModal;