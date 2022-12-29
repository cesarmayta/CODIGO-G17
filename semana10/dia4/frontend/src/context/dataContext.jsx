import { createContext, useState } from "react";

export const DataContext = createContext()

export const DataContextProvider = ({ children }) => {

    const [cursoId, setCursoId] = useState("")

    const updateId = (id) => {
        setCursoId(id)
    }
    
    return (
        <DataContext.Provider value={{
            updateId,
            cursoId
        }}>
            {children}
        </DataContext.Provider>
    )
}