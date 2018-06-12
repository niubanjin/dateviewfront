<template>
    <div ref="graph" class="graph">

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
      ...mapActions(['getGraphData']),
      initOption(){
        this.graphOption.xAxis.data = this.graphData.date
        this.graphOption.series[0].data = this.graphData.data
      }

  },
  //数值计算
  computed:{
      ...mapGetters(['graphData','graphOption'])
  },
  //页面加载完成之后调用
  mounted(){
      this.myChart = echarts.init(this.$refs.graph);
      this.getGraphData().then(()=>{
            this.initOption()
            this.myChart.setOption(this.graphOption)
      }).catch((err)=>{
          console.log(err)
      })

  }
}
</script>
<!-->制定tem<!-->
<style>
.graph{
    width: 800px;
    height:600px;
}
</style>


