
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
      return this.$store.getters.pricesByType
    },
    stockByType() {
      console.log('stockByType ran')
      return this.$store.getters.stockByType
    }
  },
  // mounted() {
  //   this.pricesByType = this.$store.getters.pricesByType
  // },
}
</script>