<template>
    <main class="toy-app container flex flex-col gap-1">
        <router-link to="/toy/edit">Add Toy</router-link>
        <toy-filter @setFilter="setFilter" />
        <toy-list v-if="toys" :toys="toys"></toy-list>
    </main>
</template>

<script>
import toyList from '../components/toy-list.vue'
import toyFilter from '../components/toy-filter.vue'

export default {
    name: 'toy-app',
    methods: {
        setFilter(filterBy) {
            console.log(filterBy)
            this.$store.dispatch({ type: 'filter', filterBy })
        },
    },
    computed: {
        toys() {
            return this.$store.getters.toys
        },
    },
    components: {
        toyList,
        toyFilter
    }
}
</script>