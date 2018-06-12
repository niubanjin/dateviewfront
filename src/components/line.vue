<template>
    <div ref="line" class="line">

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
      ...mapActions(['getLineData']),
      initOption(){
        this.lineOption.xAxis.data = this.lineData.time
        this.lineOption.series[0].data = this.lineData.inner_data
        this.lineOption.series[1].data = this.lineData.outer_data
      }

  },
  //数值计算
  computed:{
      ...mapGetters(['lineData','lineOption'])
  },
  //页面加载完成之后调用
  mounted(){
      this.myChart = echarts.init(this.$refs.line);
      this.getLineData().then(()=>{
            this.initOption()
            this.myChart.setOption(this.lineOption)
      }).catch((err)=>{
          console.log(err)
      })

  }
}
</script>
<!-->制定tem<!-->
<style>
.line{
    width: 800px;
    height:600px;
}
</style>


