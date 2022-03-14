import { toyService } from '../../services/toy-service.js'

export default {
    strict: true,
    state: {
        toys: []
    },
    getters: {
        toys(state) {
            return state.toys
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { _id }) {
            const idx = state.toys.findIndex(toy => toy._id === _id)
            state.toys.splice(idx, 1)
        }
    },
    actions: {
        loadToys({ commit }) {
            commit({
                type: 'setIsLoading',
                isLoading: true
            })
            toyService.query()
                .then(toys => commit({
                    type: 'setToys',
                    toys
                }))
                .then(() => {
                    commit({
                        type: 'setIsLoading',
                        isLoading: false
                    })
                })
                .catch(() => {
                    console.log('couldnt load toys')
                })
        },
        removeToy({ commit }, payload) {
            toyService.remove(payload._id)
                .then(() => {
                    commit(payload)
                })
                .catch(() => {
                    console.log('couldnt remove toy')
                })
        },
        saveToy({ dispatch }, payload) {
            toyService.save(payload.toy)
                .then(() => dispatch('loadToys'))
                .catch(() => {
                    console.log('couldnt save toy')
                })
        }
    }
}