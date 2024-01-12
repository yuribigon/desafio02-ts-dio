import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert
    const mockEmail = 'yuri@email.com'

    it('should return welcome message if email is valid', () => {
        login(mockEmail)
        expect(mockAlert).toHaveBeenCalledWith(`${mockEmail} seu login foi realizado!`)    
    })

    it('should not return welcome message without an email', async() => {
        await login(mockEmail)
        expect(mockAlert).not.toHaveBeenCalledWith(' seu login foi realizado!')    
    })

    it('should show error if email is not valid', async() => {
        await login('email@example.com')
        expect(mockAlert).toHaveBeenCalledWith('Este e-mail não é válido')
    })
})
