# vue-eharts-plugin

a custom plugin for using Echarts in Vue.js(v2/3) apps.

# Usage

vue3

```javascript
// main.js
import * as echarts from 'echarts'
import VueEchartsPlugin from 'vue-echarts-plugin'

app.use(VueEchartsPlugin, { echarts, ... })
```

vue2

```javascript
// main.js
import Vue from 'vue'
import * as echarts from 'echarts'
import VueEchartsPlugin from 'vue-echarts-plugin'

Vue.use(VueEchartsPlugin, { echarts, ... })
```

use in sfc

```javascript
<template>
  <div v-chart="echartOption" ref="chart"></div>
</template>

// You can get the instance this way
// vue2
<script>
  export default {
    data: () => ({
      echartOption: {...}
    })
    mounted() {
      this.$refs.chart.echartsInstance
    }
  }
</script>

// vue3
<script setup>
  const echartOption = reactive({...})
  const chart = ref()
  onMounted(() => chart.echartsInstance)
</script>
```
