<template>
    <DoughnutChart :chartData="testData" />
</template>

<script>
import { DoughnutChart } from 'vue-chart-3'
import { Chart, registerables } from 'chart.js'

Chart.register(...registerables)
export default {
    name: 'dashboard-chart',
    props: {
        labels: Array,
        chartData: Array
    },
    data() {
        return {
        }
    },
    mounted() {
        console.log(this.chartData)
    },
    computed: {
        testData() {
            return {
                labels: this.labels,
                datasets: [{
                    data: this.chartData,
                    backgroundColor: ['#77CEFF', '#0079AF', '#123E6B', '#97B0C4', '#A5C8ED'],
                }],
            }
        }
    },
    watch: {
        'this.chartData': {
            handler() {

            },
            deep: true,
            immediate: true
        }
    },
    components: {
        DoughnutChart
    },
}
</script>