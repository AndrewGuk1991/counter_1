import {useEffect, useState} from "react";
import countStyles from './Count.module.css'
import commonStyles from '../../../common/styles/Common.module.css'
import {useNavigate} from "react-router-dom";
import {PATH} from "../Counter.tsx";
import {useAppSelector} from "../../../common/hooks/useAppSelector.ts";
import {selectMaxCount, selectStartCount} from "../../../bll/counter-slice.ts";

export const Count = () => {

    const startCount = useAppSelector(selectStartCount)
    const maxCount = useAppSelector(selectMaxCount)

    const [currentCount, setCount] = useState(startCount)
    useEffect(() => {
        setCount(startCount)
    }, [startCount]);

    const navigate = useNavigate()

    return (
        <div className={commonStyles.boxStyles}>
            <div className={countStyles.count} style={{color: currentCount === maxCount? 'red': 'aqua'}}>
                {currentCount}
            </div>
            <div className={commonStyles.buttonsContainer}>
                <button
                    disabled={currentCount === maxCount}
                    onClick={() => {
                        setCount(currentCount + 1)
                    }}
                >inc</button>
                <button
                    disabled={currentCount === startCount}
                    onClick={() => {
                        setCount(startCount)
                    }}
                >reset</button>
                <button
                    onClick={() => navigate(PATH.SETTINGS)}
                >
                        set
                </button>
            </div>
        </div>
    );
};

