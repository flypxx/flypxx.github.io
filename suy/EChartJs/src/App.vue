<template>
  <div id="app">
    <div class="echartbox">
      <div id="main" style="width: 600px;height:400px;"></div>
    </div>
    <router-view></router-view>
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'app',
  mounted() {
    (() => {
      console.log(echarts)
      let myChart = echarts.init(document.getElementById('main'))
      let colors = ['#5793f3', '#c23531']
      // 绘制图表
      myChart.setOption({
        color: colors,
        legend: {
          data: ['销量', '产量']
        },
        title: { text: 'ECharts NO.1 Demo' },
        tooltip: {},
        xAxis: {
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: [
          {
            type: 'value',
            name: '销量',
            min: 0,
            max: 40,
            position: 'left',
            axisLine: {
              lineStyle: {
                color: colors[0]
              }
            }
          },
          {
            type: 'value',
            name: '产量',
            min: 0,
            max: 40,
            position: 'right',
            axisLine: {
              lineStyle: {
                color: colors[1]
              }
            }
          }
        ],
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: '产量',
          type: 'line',
          yAxisIndex: 1,
          data: [6, 30, 22, 30, 13, 9]
        }]
      })
    })()
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
