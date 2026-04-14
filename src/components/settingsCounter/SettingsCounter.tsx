import counterStyles from '../../common/styles/Common.module.css'
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
        <div className={counterStyles.boxStyles}>
            <div className={settingsCounterStyles.settingsCounter}>
                <div className={settingsCounterStyles.inputWrapper}>
                    <label>
                        <span>Max Value:</span>
                        <input
                            style={{backgroundColor: !validSettingsValued ? 'red': 'white'}}
                            value={currentMaxCount}
                            type="number"
                            onChange={(e) => setCurrentMaxCount(Number(e.target.value))}
                        />
                    </label>
                    <label>
                        <span>Start Value:</span>
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
            <div className={counterStyles.buttonsContainer}>
                <button
                    disabled={!validSettingsValued}
                    onClick={() => {onChangeSettings(currentStartCount, currentMaxCount)}}
                >
                    set
                </button>
            </div>
        </div>
    );
};

