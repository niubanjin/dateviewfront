<template>
    <div ref="themeriver" class="themeriver">

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
      ...mapActions(['getThemeriverData']),
      initOption(){
        this.themeriverOption.series[0].data = this.themeriverData.data;
        this.themeriverOption.legend.data = this.themeriverData.legend;
      }

  },
  //数值计算
  computed:{
      ...mapGetters(['themeriverData','themeriverOption'])
  },
  //页面加载完成之后调用
  mounted(){
      this.myChart = echarts.init(this.$refs.themeriver);
      this.getThemeriverData().then(()=>{
            this.initOption()
            this.myChart.setOption(this.themeriverOption)
      }).catch((err)=>{
          console.log(err);
          console.log()
      })

  }
}
</script>
<!-->制定tem<!-->
<style>
.themeriver{
    width: 800px;
    height:600px;
}
</style>


