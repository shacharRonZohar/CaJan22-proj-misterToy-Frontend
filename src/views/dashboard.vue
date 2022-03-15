
<template>
  <main>
    <dashboard-chart :labels="labels" :chartData="pricesByType" />
    <dashboard-chart :labels="labels" :chartData="stockByType" />
  </main>
</template>

<script>
import dashboardChart from '../components/dashboard-chart.vue'
export default {
  data() {
    return {
      labels: this.$store.getters.labels,
    }
  },
  components: {
    dashboardChart
  },
  computed: {
    pricesByType() {
      console.log('pricesByType ran')
      const cb = (accPrice, toy) => {
        return accPrice + toy.price
      }
      return this.$store.getters.detailByType(cb)
    },
    stockByType() {
      console.log('stockByType ran')
      const cb = (acc, toy) => {
        if (toy.inStock) return ++acc
        else return acc
      }
      return this.$store.getters.detailByType(cb)
    }
  },
}
</script>