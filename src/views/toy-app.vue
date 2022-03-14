<template>
    <section class="toy-app container flex flex-col gap-1">
        <toy-list v-if="toys" :toys="toys"></toy-list>
    </section>
</template>

<script>
import toyList from '../components/toy-list.vue'

export default {
    name: 'toy-app',
    computed: {
        toys() {
            return this.$store.getters.toys
        },
    },
    components: {
        toyList
    }
}
</script>