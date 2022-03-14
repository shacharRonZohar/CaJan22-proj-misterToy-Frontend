<template>
    <section v-if="_id">
        <router-link :to="editPath" class="btn btn-primary">Edit</router-link>
        <router-link :to="detailsPath" class="btn btn-info">See More</router-link>
        <button @click="removeToy(_id)" class="btn btn-danger">Delete</button>
    </section>
</template>

<script>

export default {
    props: {
        _id: String
    }
    ,
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
        },
        detailsPath() {
            return `/toy/${this._id}`
        }
    },
    unmounted() { },
}
</script>