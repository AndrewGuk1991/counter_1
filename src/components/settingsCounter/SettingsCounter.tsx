import commonStyles from '../../common/styles/Common.module.css'
import settingsCounterStyles from './SettingsCounter.module.css'
import {useState} from "react";

type Props = {
    onChangeSettings: (newStartCount: number, newMaxCount: number) => void
    startCount: number
    maxCount: number
}

export const SettingsCounter = (
    {
        startCount,
        maxCount,
        onChangeSettings,
    }: Props) => {
    const [currentStartCount, setCurrentStartCount] = useState(startCount)
    const [currentMaxCount, setCurrentMaxCount] = useState(maxCount)

    const validSettingsValued = currentMaxCount > currentStartCount

    return (
        <div className={commonStyles.boxStyles}>
            <div className={settingsCounterStyles.settingsCounter}>
                <div className={settingsCounterStyles.inputWrapper}>
                    <label>
                        <span>max value:</span>
                        <input
                            style={{backgroundColor: !validSettingsValued ? 'red': 'white'}}
                            value={currentMaxCount}
                            type="number"
                            onChange={(e) => setCurrentMaxCount(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        <span>start value:</span>
                        <input
                            style={{backgroundColor: !validSettingsValued ? 'red': 'white'}}
                            value={currentStartCount}
                            type="number"
                            onChange={(e) => setCurrentStartCount(Number(e.target.value))}
                        />
                    </label>
                </div>
                {!validSettingsValued && <div className={settingsCounterStyles.helperMessage}>Enter valid values</div>}
            </div>
            <div className={commonStyles.buttonsContainer}>
                <button
                    disabled={!validSettingsValued || (startCount === currentStartCount && maxCount === currentMaxCount)}
                    onClick={() => {onChangeSettings(currentStartCount, currentMaxCount)}}
                >
                    set
                </button>
            </div>
        </div>
    );
};

