import {SettingsCounter} from "./settingsCounter/SettingsCounter.tsx";
import {Count} from "./count/Count.tsx";
import styles from './Counter.module.css'
import {Navigate, Route, Routes} from "react-router-dom";
import {Error} from "../error/Error.tsx";

export const PATH = {
    COUNT: "/count",
    SETTINGS: "/settings",
    // ERROR: "/error",

} as const

export const Counter = () => {

    return (
        <div className={styles.counter}>
            <Routes>
                <Route path="/" element={<Navigate to={PATH.COUNT}/>} />
                <Route
                    path={PATH.COUNT}
                    element={<Count />}
                />
                <Route
                    path={PATH.SETTINGS}
                    element={<SettingsCounter/>}
                />
                {/*<Route path={PATH.ERROR} element={<Error/>}/>*/}
                {/*<Route path={'/*'} element={<Navigate to={PATH.ERROR}/>}/>*/}
                <Route path={'/*'} element={<Error/>}/>
            </Routes>
        </div>
    );
};

