import { login } from "./login"

describe('login', () => {

    const mockAlert = jest.fn()
    window.alert = mockAlert

    it('should return welcome message', () => {
        login()
        expect(mockAlert).toHaveBeenCalledWith('Seu login foi realizado!')    
    })
})
