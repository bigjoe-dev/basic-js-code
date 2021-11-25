let store = {
    message: 'Joe is good'
}

const root = document.getElementById('root')

const updateStore = (store, newState) => {
    store = Object.assign(store, newState)
    render(root, store)
}

const render = async (root, state) => {
    root.innerHTML = App(state)
}

const App = (state) => {
    const { message } = state

    return `<h1>${message}</h1>`
}

window.addEventListener('load', () => {
    render(root, store)
    setTimeout(() => {
        updateStore(store, { message: 'Joe is bad' })
    }, 2000)
})