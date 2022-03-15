import { toyService } from '../../services/toy-service.js'

export default {
    strict: true,
    state: {
        toys: [],
        filterBy: {},
        labels: ["On wheels", "Box game", "Art", "Baby", "Doll", "Puzzle", "Outdoor", "Battery Powered"]
    },
    getters: {
        toys(state) {
            return JSON.parse(JSON.stringify(state.toys))
        },
        labels(state) {
            return JSON.parse(JSON.stringify(state.labels))
        },
        pricesByType(state) {
            return state.labels.reduce((acc, label) => {
                acc.push(state.toys
                    .filter(toy => {
                        return toy.labels.includes(label)
                    })
                    .reduce((acc, toy) => {
                        return acc + toy.price
                    }, 0))
                return acc
            }, [])
        },
        stockByType(state) {
            return state.labels.reduce((acc, label) => {
                acc.push(state.toys
                    .filter(toy => {
                        return toy.labels.includes(label)
                    })
                    .reduce((acc, toy) => {
                        if (toy.inStock) return ++acc
                        else return acc
                    }, 0))
                return acc
            }, [])
        }
    },
    mutations: {
        setToys(state, { toys }) {
            state.toys = toys
        },
        removeToy(state, { _id }) {
            const idx = state.toys.findIndex(toy => toy._id === _id)
            state.toys.splice(idx, 1)
        },
        setFilter(state, { filterBy }) {
            state.filterBy = filterBy
        },
    },
    actions: {
        loadToys({ commit, state }) {
            commit({
                type: 'setIsLoading',
                isLoading: true
            })
            toyService.query(state.filterBy)
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
        },
        filter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadToys' })
        },
    }
}