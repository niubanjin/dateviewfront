<template>
    <div ref="heatmap" class="heatmap">

    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import echarts from 'echarts'
export default {
  data(){
      return {
          myChart:null
      }
  },
  methods:{
      ...mapActions(['getHeatmapData']),
      initOption(){
        this.heatmapOption.xAxis.data = this.heatmapData.time
        this.heatmapOption.yAxis.data = this.heatmapData.name
      }

  },
  //数值计算
  computed:{
      ...mapGetters(['heatmapData','heatmapOption'])
  },
  //页面加载完成之后调用
  mounted(){
      this.myChart = echarts.init(this.$refs.heatmap);
      this.getHeatmapData().then(()=>{
            this.initOption()
            this.myChart.setOption(this.heatmapOption)
      }).catch((err)=>{
          console.log(err)
      })

  }
}
</script>
<!-->制定tem<!-->
<style>
.heatmap{
    width: 800px;
    height:600px;
}
</style>


