import {useEffect, useState} from "react";
import countStyles from './Count.module.css'
import counterStyles from '../../common/styles/Common.module.css'

type Props = {
    startCount: number
    maxCount: number
}

export const Count = ({startCount, maxCount}: Props) => {

    const [currentCount, setCount] = useState(startCount)
    useEffect(() => {
        setCount(startCount)
    }, [startCount, maxCount]);

    return (
        <div className={counterStyles.boxStyles}>
            <div className={countStyles.count} style={{color: currentCount === maxCount? 'red': 'aqua'}}>
                {currentCount}
            </div>
            <div className={counterStyles.buttonsContainer}>
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
                <button>set</button>
            </div>
        </div>
    );
};

