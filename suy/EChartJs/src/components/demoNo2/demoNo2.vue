<template>
  <div class="demo-number-2">
    <div class="echartbox">
      <div id="demo2" style="width: 600px;height:400px;" class="demo2"></div>
    </div>
  </div>
</template>
<script type="ecmascript-6">
import echarts from 'echarts'
export default {
  mounted() {
    this.setDemo2Echart()
  },
  methods: {
    setDemo2Echart() {
      console.log(1)
      let myChart = echarts.init(document.getElementById('demo2'))
      let colors = ['#5793f3', 'rgb(224, 105, 62)']
      // 绘制图表
      myChart.setOption({
        color: colors,
        legend: {
          data: ['销量', '产量']
        },
        title: {
          text: 'ECharts NO.2 Demo',
          subtext: '服装类销量产量'
        },
        tooltip: {},
        xAxis: {
          position: 'top',
          type: 'category',
          data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
        },
        yAxis: [
          {
            type: 'value',
            min: 0,
            max: 40
          }
        ],
        series: [{
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        },
        {
          name: '产量',
          type: 'bar',
          data: [6, 30, 22, 30, 13, 9]
        }]
      })
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>
