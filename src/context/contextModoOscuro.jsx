import {createContext, useContext, useState } from "react";

export const contextOscuro = createContext()

export const ContextProvider=({children})=>{
    const [context, setContext] = useState("light")

    const valuesContext ={context, setContext}
    return(
        <contextOscuro.Provider value={valuesContext}>
            {children}
        </contextOscuro.Provider>
    )
}

export const useContextOscuro =()=>{
    const context = useContext(contextOscuro)
    return context
}