<template>
    <div ref="pin" class="pin">
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
      ...mapActions(['getPinData']),
      initOption(){
        this.pinOption.legend.data = this.pinData.subject
        this.pinOption.series[0].data = this.pinData.first_data
        this.pinOption.series[1].data = this.pinData.second_data
      }

  },
  //数值计算
  computed:{
      ...mapGetters(['pinData','pinOption'])
  },
  //页面加载完成之后调用
  mounted(){
      this.myChart = echarts.init(this.$refs.pin);
      this.getPinData().then(()=>{
            this.initOption()
            this.myChart.setOption(this.pinOption)
      }).catch((err)=>{
          console.log(err)
      })

  }
}
</script>
<!-->制定tem<!-->
<style>
.pin{
    width: 800px;
    height:600px;
}
</style>


