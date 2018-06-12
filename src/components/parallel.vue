<template>
    <div ref="parallel" class="parallel">

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
      ...mapActions(['getParallelData']),
      initOption(){
        this.graphOption.xAxis.data = this.graphData.date
        this.graphOption.series[0].data = this.graphData.data
      }
       
  },
  //数值计算
  computed:{
      ...mapGetters(['parallelData','parallelOption'])
  },
  //页面加载完成之后调用
  mounted(){
      this.myChart = echarts.init(this.$refs.parallel);
      this.getParallelData().then(()=>{
            this.initOption()
            this.myChart.setOption(this.parallelOption)
      }).catch((err)=>{
          console.log(err)
      })

  }
}
</script>
<!-->制定tem<!-->
<style>
.parallel{
    width: 800px;
    height:600px;
}
</style>


