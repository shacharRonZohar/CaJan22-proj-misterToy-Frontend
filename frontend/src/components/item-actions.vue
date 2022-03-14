<template>
    <section v-if="_id">
        <router-link :to="editPath" class="btn btn-primary">Edit</router-link>
        <!-- <button @click="goToDetail" class="btn btn-info">details</button> -->
        <button @click="removeToy(_id)" class="btn btn-danger">Delete</button>
    </section>
</template>

<script>

export default {
    // props: [''],
    props: {
        _id: Number,
        // required: true
    },
    components: {},
    created() { },
    data() {
        return {}
    },
    methods: {
        removeToy(_id) {
            this.$store.dispatch({
                type: 'removeToy',
                _id
            })
        }
    },
    computed: {
        editPath() {
            return `/toy/edit/${this._id}`
        }
    },
    unmounted() { },
}
</script>