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