<template>
    <ul class="toy-list clean-list grid gap-1">
        <toy-preview v-for="toy in toys" :toy="toy" :key="toy._id" />
    </ul>
</template>

<script>
import toyPreview from './toy-preview.vue'
export default {
    props: {
        toys: {
            type: Array,
            required: true
        }
    },
    // props: [''],
    components: {
        toyPreview
    },
    created() { },
    data() {
        return {}
    },
    methods: {},
    computed: {},
    unmounted() { },
}
</script>