import ThemeSelectorStyle from '../styles/ThemeSelectorStyle.module.css'
const ThemeSelector = ({onThemeChange}) => {
    return (
        <section>
            <button className={`${ThemeSelectorStyle['theme-button-default']} ${ThemeSelectorStyle['theme-buttons']}`}
                    onClick={() => onThemeChange('default')}
            ></button>
            <button className={`${ThemeSelectorStyle['theme-button-green']} ${ThemeSelectorStyle['theme-buttons']}`}
                    onClick={() => onThemeChange('green')}
            ></button>
            <button className={`${ThemeSelectorStyle['theme-button-blue']} ${ThemeSelectorStyle['theme-buttons']}`}
                    onClick={() => onThemeChange('blue')}
            ></button>
            <button className={`${ThemeSelectorStyle['theme-button-brown']} ${ThemeSelectorStyle['theme-buttons']}`}
                    onClick={() => onThemeChange('brown')}
            ></button>
        </section>
    )
}
export default ThemeSelector;