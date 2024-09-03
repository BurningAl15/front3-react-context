import { createContext, useState, useContext } from 'react';
import EN from "./languages/english.json"
import PTBR from "./languages/portuguese.json"
import ES from "./languages/spanish.json"

export const languages = {
    english: {
        id: "EN",
        text: EN
    },
    portuguese: {
        id: "PTBR",
        text: PTBR
    },
    spanish: {
        id: "ES",
        text: ES
    }
    /* SUGERENCIA: agregue los demás idiomas */
};

/* SUGERENCIA: Usa createContext e inicia el idioma inglês como predeterminado */
const LanguageStates = createContext();


const LanguageContext = ({ children }) => {
    const [language, setLanguage] = useState(languages["english"]);

    const handleChangeLanguage = (newLanguage) => {
        setLanguage(newLanguage)
    }

    return (
        <LanguageStates.Provider value={{ languages, language, setLanguage, handleChangeLanguage }}>
            {children}
        </LanguageStates.Provider>
    )
}

export default LanguageContext;

export const useLanguageStates = () => useContext(LanguageStates);