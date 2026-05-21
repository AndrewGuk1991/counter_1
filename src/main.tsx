import { HashRouter } from "react-router-dom";
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import {Provider} from "react-redux";
import {store} from "./bll/store.ts";

createRoot(document.getElementById('root')!).render(
    <Provider store={store}>
        <HashRouter>
            <App />
        </HashRouter>
    </Provider>

)
