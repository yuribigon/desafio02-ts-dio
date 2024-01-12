const conta = {
    email: 'yuri@email.com',
    password: '123456',
    name: 'Yuri Bigon'
}

export const api = new Promise((resolve) => {
    setTimeout(() => {
        resolve(conta)
    }, 1500)
})