const conta = {
    email: 'yuri@email.com',
    password: '123456',
    name: 'Yuri Bigon',
    balance: 2000,
    id: '1'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})