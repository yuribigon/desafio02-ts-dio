/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, useEffect, useState } from 'react'
import { getlAllLocalStorage } from '../../services/storage';

interface IAppContext {
    user: string,
    isLoggedIn: boolean
    setIsLoggedIn: (isLoggedIn: boolean) => void
}

export const AppContext = createContext({} as IAppContext);

export const AppContextProvider = ({ children }: any) => {
    const [ isLoggedIn, setIsLoggedIn ] = useState<boolean>(false)
    
    const storage = getlAllLocalStorage()

    useEffect(() => {
        if(storage){
            const { login } = JSON.parse(storage)
            setIsLoggedIn(login);
        }
    }, [storage])

    
    const user = 'yuri';

    return (
        <AppContext.Provider value={{ user, isLoggedIn, setIsLoggedIn }}>
            {children}
        </AppContext.Provider>
    )
}




