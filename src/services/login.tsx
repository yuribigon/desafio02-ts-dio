/* eslint-disable @typescript-eslint/no-explicit-any */
import { api } from "../api"

export const login = async (email: string) : Promise<void> => {
    const data : any = await api

    if (email !== data.email) {
        return alert('Este e-mail não é válido')
    }
    alert(`${data.name} seu login foi realizado!`)    
}