<template>
    <li class="toy-preview costum-card">
        <custom-card>
            <template #header>
                <p>
                    <span class="fw-bold">Name:</span>
                    {{ toy.name }}
                </p>
                <p>
                    <span class="fw-bold">Price:</span>
                    {{ toy.price }}
                    <span class="fw-bold stock-status">inStockTxt</span>
                </p>
            </template>
            <template #footer>
                <!-- TODO: Make dynamic -->
                <item-actions :_id="+toy._id"></item-actions>
            </template>
        </custom-card>
    </li>
</template>

<script>
import customCard from './custom-card.vue'
import itemActions from './item-actions.vue'

export default {
    props: {
        toy: {
            type: Object,
            required: true
        }
    },
    components: {
        customCard,
        itemActions
    },
    created() { },
    data() {
        return {}
    },
    methods: {
    },
    computed: {
        inStockTxt() {
            return this.toy.inStock ? 'In stock' : 'Out of stock'
        }
    },
    unmounted() { },
}
</script>