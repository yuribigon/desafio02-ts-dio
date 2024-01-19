/* eslint-disable @typescript-eslint/no-explicit-any */
import { login } from "./login"

describe('login', () => {
    const mockEmail = 'yuri@email.com'

    it('should return welcome message if email is valid', async () => {
        const response = await login(mockEmail)
        expect(response).toBeTruthy
    })
    it('should show error if email is not valid', async() => {
        const response = await login('email@example.com')
        expect(response).toBeFalsy
    })
})
