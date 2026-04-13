import counterStyles from '../../common/styles/Common.module.css'
import settingsCounterStyles from './SettingsCounter.module.css'

export const SettingsCounter = () => {
    return (
        <div className={counterStyles.boxStyles}>
            <div className={settingsCounterStyles.settingsCounter}>
                <div className={settingsCounterStyles.inputWrapper}>
                    <input type="number"/>
                    <input type="number"/>
                </div>
            </div>
            <div className={counterStyles.buttonsContainer}>
                <button>
                    set
                </button>
            </div>
        </div>
    );
};

