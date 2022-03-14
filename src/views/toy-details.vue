<template>
    <section class="toy-details">
        <pre>
            {{ toy }}
        </pre>
    </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'

export default {
    // props: [''],
    components: {},
    created() { },
    data() {
        return {
            toy: {}
        }
    },
    watch: {
        'this.$route.params.toyId': {
            handler() {
                toyService.getById(this.$route.params.toyId)
                    .then(toy => this.toy = toy)
            },
            immediate: true
        }
    },
    methods: {},
    computed: {},
    unmounted() { },
}
</script>