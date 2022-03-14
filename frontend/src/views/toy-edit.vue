<template>
    <section>
        <pre>
            {{ toyToEdit }}
        </pre>
        <form @submit.prevent="saveToy">
            <input type="text" v-model="toyToEdit.name" placeholder="Name" />
            <input type="number" v-model="toyToEdit.price" placeholder="Price" />
            <!-- <select v-model="toyToEdit.inStock">
                <option value="true">In Stock</option>
                <option value="false">Out of Stock</option>
            </select>-->
            <button class="btn">save</button>
        </form>
    </section>
</template>

<script>
import { toyService } from '../services/toy-service.js'
export default {
    components: {},
    created() { },
    data() {
        return {
            toyToEdit: {}
        }
    },
    watch: {
        'this.$route.params.toyId': {
            handler() {
                const _id = +this.$route.params.toyId
                if (!_id) this.toyToEdit = toyService.getEmptyToy()
                else toyService.getById(_id)
                    .then(toy => this.toyToEdit = toy)
            },
            immediate: true
        }
    },
    methods: {
        saveToy() {
            this.$store.dispatch({
                type: 'saveToy',
                toy: this.toyToEdit
            })
        }
    },
    computed: {},
    unmounted() { },
}
</script>