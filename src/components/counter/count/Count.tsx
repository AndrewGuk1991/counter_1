import {useEffect, useState} from "react";
import countStyles from './Count.module.css'
import commonStyles from '../../../common/styles/Common.module.css'
import {useNavigate} from "react-router-dom";

type Props = {
    startCount: number
    maxCount: number
}

export const Count = ({startCount, maxCount}: Props) => {

    const [currentCount, setCount] = useState(startCount)
    useEffect(() => {
        setCount(startCount)
    }, [startCount, maxCount]);

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
                    onClick={() => navigate('/settings')}
                >
                        set
                </button>
            </div>
        </div>
    );
};

