import React, { useContext } from 'react'
import { useLanguageStates } from '../context'

const Body = () => {

    /* CONSEJO: Utilizar useContext */
    const { language } = useLanguageStates();
    const { text } = language

    return (
        <div>
            {/* CONSEJO: Utilizar los valores capturados desde el useContext */}
            <h1>{text.title}</h1>
            <p>{text.description}</p>
        </div>
    )
}

export default Body