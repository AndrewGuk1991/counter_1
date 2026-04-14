import {useEffect, useState} from 'react'
import './App.css'
import {Count} from "./components/count/Count.tsx";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter.tsx";

function App() {
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
        <div className="app">
            <SettingsCounter
                onChangeSettings={(newStartCount, newMaxCount) => {
                    setStartCount(newStartCount)
                    setMaxCount(newMaxCount)
                }}
                startCount={startCount}
                maxCount={maxCount}
            />
            <Count
                startCount={startCount}
                maxCount={maxCount}
            />
        </div>
    )
}

export default App
