import { createStore } from 'vuex'

import toyStore from './modules/toy-module.js'
const store = createStore({
    strict: true,
    state: {
        isLoading: true
    },
    mutations: {
        setIsLoading(state, { isLoading }) {
            state.isLoading = isLoading
        }
    },
    modules: {
        toyStore
    }
})

export default store

export const utilService = {
    makeId,
    makeExtId,
    formatTime,
    getRandomInt,
    getRandomColor,
    resetLocalStorage
}

function makeId(startSymb = '', length = 9) {
    let text = startSymb
    const possible = '0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function makeExtId(length) {
    var text = ''
    var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length))
    }
    return text
}

function getRandomInt(min, max) {
    min = Math.ceil(min)
    max = Math.floor(max)
    return Math.floor(Math.random() * (max - min) + min)
}

function getRandomColor() {
    var letters = '0123456789ABCDEF'
    var color = '#'
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)]
    }
    return color
}

function resetLocalStorage() {
    localStorage.clear()
    window.location.reload()
}

function formatTime(time, opts) {
    return new Intl.DateTimeFormat('default', opts).format(time)
}