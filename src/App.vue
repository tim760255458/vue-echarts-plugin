<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import { computed, onMounted, reactive, ref, watchEffect } from 'vue';

const types = ref(['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'])
const values = ref([150, 230, 224, 218, 135, 147])
const chartOption = computed(() => {
  return {
    xAxis: {
      type: 'category',
      data: types.value
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        data: values.value,
        type: 'line'
      }
    ]
  }
})

onMounted(() => {
  setTimeout(() => {
    types.value = [...types.value, 'Sun']
    values.value = [...values.value, 260]
  }, 2000);
})

const chart = ref()
onMounted(() => {
  setTimeout(() => {
    chart.value.style.width = '100%'
  }, 5000);
})
</script>

<template>
  <div>
    <div v-chart="chartOption" class="chart" ref="chart" />
  </div>
</template>

<style>
html,
body,
#app {
  height: 100%;
}

body {
  margin: 0;
}

.chart {
  width: 80%;
  height: 400px;
}
</style>
