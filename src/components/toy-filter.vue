<template>
  <section class="toy-filter">
      <input type="search" @input="setFilter" v-model="filterBy.name" placeholder="Search toy">
      <label>
            In stock:
            <select v-model="filterBy.inStock" @change="setFilter">
              <option value="all">All</option>
              <option value="instock">In stock</option>
              <option  value="not-instock">Not in stock</option>
            </select>
          </label>
  </section>
</template>

<script>
export default {
  name: "todo-filter",
  data() {
    return {
      filterBy: {
        name: '',
        inStock: 'all',
        toyLabel: '',
      },
    };
  },
  methods: {
      setFilter(){
      this.$emit('filtered', {...this.filterBy})
    } 
  },
};
</script>

<style>
</style>