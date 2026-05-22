import commonStyles from '../../../common/styles/Common.module.css'
import settingsCounterStyles from './SettingsCounter.module.css'
import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {PATH} from "../Counter.tsx";
import {useAppDispatch} from "../../../common/hooks/useAppDispatch.ts";
import {changeSettingsTC} from "../../../bll/counterReducer.ts";
import {useAppSelector} from "../../../common/hooks/useAppSelector.ts";
import {selectMaxCount, selectStartCount} from "../../../bll/counterSelectors.ts";


export const SettingsCounter = () => {

    const startCount = useAppSelector(selectStartCount)
    const maxCount = useAppSelector(selectMaxCount)

    const [currentStartCount, setCurrentStartCount] = useState(startCount)
    const [currentMaxCount, setCurrentMaxCount] = useState(maxCount)

    const validSettingsValued = currentMaxCount > currentStartCount

    const navigate = useNavigate()

    const dispatch = useAppDispatch()

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
                    onClick={() => {
                        dispatch(changeSettingsTC({startCount: currentStartCount, maxCount: currentMaxCount}))
                        navigate(PATH.COUNT)
                    }}
                >set
                </button>
            </div>
        </div>
    );
};

