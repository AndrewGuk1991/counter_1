import { useState } from 'react'
import './App.css'
import {Count} from "./components/count/Count.tsx";
import {SettingsCounter} from "./components/settingsCounter/SettingsCounter.tsx";

function App() {
  const [startCount, setStartCount] = useState(0)
  const [maxCount, setMaxCount] = useState(2)


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
