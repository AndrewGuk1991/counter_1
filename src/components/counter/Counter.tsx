import {useEffect, useState} from "react";
import {SettingsCounter} from "./settingsCounter/SettingsCounter.tsx";
import {Count} from "./count/Count.tsx";
import styles from './Counter.module.css'
import {Routes, Route, Navigate} from "react-router-dom";
import {Error} from "../error/Error.tsx";

export const PATH = {
    COUNT: "/count",
    SETTINGS: "/settings",
    // ERROR: "/error",

} as const

export const Counter = () => {
    const [startCount, setStartCount] = useState(() => {
        const saved = localStorage.getItem('startCount')
        return saved ? JSON.parse(saved) : 0
    })

    const [maxCount, setMaxCount] = useState(() => {
        const saved = localStorage.getItem('maxCount')
        return saved ? JSON.parse(saved) : 2
    })

    useEffect(() => {
        localStorage.setItem('startCount', JSON.stringify(startCount))
        localStorage.setItem('maxCount', JSON.stringify(maxCount))
    }, [startCount, maxCount]);

    return (
        <div className={styles.counter}>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.COUNT}/>} />
                <Route
                    path={PATH.COUNT}
                    element={<Count startCount={startCount} maxCount={maxCount} />}
                />
                <Route
                    path={PATH.SETTINGS}
                    element={<SettingsCounter
                        onChangeSettings={(newStartCount, newMaxCount) => {
                            setStartCount(newStartCount)
                            setMaxCount(newMaxCount)
                        }}
                        startCount={startCount}
                        maxCount={maxCount}
                    />}
                />
                {/*<Route path={PATH.ERROR} element={<Error/>}/>*/}
                {/*<Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>*/}
                <Route path={'/*'} element={<Error/>}/>
            </Routes>
        </div>
    );
};

