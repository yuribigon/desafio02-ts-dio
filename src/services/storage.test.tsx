import { changeLocalStorage, createLocalStorage, getlAllLocalStorage } from "./storage"

const dioBank = {
    login: false
}
describe('storage', () => {
    const mockSetItem = jest.spyOn(Storage.prototype, 'setItem')
    it('should return an local storage objetc', () => {
        const mockGetItem = jest.spyOn(Storage.prototype, 'getItem')
        getlAllLocalStorage()
        expect(mockGetItem).toHaveBeenCalledWith('diobank')
    })

    it('should create an local storage objetc', () =>{
        createLocalStorage()
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })

    it('should change an local storage objetc', () =>{
        changeLocalStorage(dioBank)
        expect(mockSetItem).toHaveBeenCalledWith('diobank', JSON.stringify(dioBank))
    })
})