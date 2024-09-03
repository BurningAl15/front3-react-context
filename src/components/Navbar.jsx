import React from 'react'
import "../App.css"
import { useLanguageStates } from '../context'

const Navbar = () => {
    const { handleChangeLanguage, languages, language } = useLanguageStates();
    const { text } = language

    return (
        <div className="navbar">
            <p>{text.home}</p>
            <p>{text.current}: {language.id}</p>
            <button onClick={() => handleChangeLanguage(languages["portuguese"])}>PTBR</button>
            <button onClick={() => handleChangeLanguage(languages["spanish"])}>ES</button>
            <button onClick={() => handleChangeLanguage(languages["english"])}>EN</button>
        </div>
    )
}

export default Navbar