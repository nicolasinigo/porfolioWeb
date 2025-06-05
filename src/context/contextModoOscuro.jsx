import {createContext, useContext, useState, useEffect } from "react";

export const contextOscuro = createContext()

export const ContextProvider=({children})=>{
    const [context, setContext] = useState(() => {
    // Intenta recuperar del localStorage, si no hay, usa "light"
    return localStorage.getItem("modo-tema") || "light";
  });

    useEffect(() => {
    // Guarda el tema cada vez que cambia
    localStorage.setItem("modo-tema", context);
  }, [context]);

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