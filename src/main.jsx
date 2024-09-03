import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import LanguageContext from "./context";

ReactDOM.createRoot(document.getElementById('root')).render(
    <LanguageContext>
        <App />
    </LanguageContext>
)