<template>
    <div ref="radar" class="radar">

    </div>
</template>

<script>
import {mapGetters, mapActions} from 'vuex'
import echarts from 'echarts'
export default {
  data(){
      return {
          myChart:null,
      }
  },
  methods:{
      ...mapActions(['getRadarData']),
      initOption(){
        this.radarOption.legend.data = this.radarData.staff_list    
        this.radarOption.radar.indicator = this.radarData.standard
        this.radarOption.series[0].data = this.radarData.data
      }


  },
  //数值计算
  computed:{
      ...mapGetters(['radarData','radarOption'])
  },
  //页面加载完成之后调用
  mounted(){
      this.myChart = echarts.init(this.$refs.radar);
      this.getRadarData().then(()=>{
            this.initOption()
            this.myChart.setOption(this.radarOption)
      }).catch((err)=>{
          console.log(err)
      })

  }
}
</script>
<!-->制定tem<!-->
<style>
.radar{
    width: 800px;
    height:600px;
    /* width: 100%;
    height: 100%; */
}
</style>


