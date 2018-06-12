import axios from '../axios'
import echarts from 'echarts'
export default {
    //初始状态
    state:{
        graph:{

        },
        option : { 
                tooltip: {
                    position: 'top'
                },
                animation: false,
                grid: {
                    height: '50%',
                    y: '10%'
                },
                xAxis: {
                    type: 'category',
                    data: [],
                    splitArea: {
                        show: true
                    }
                },
                yAxis: {
                    type: 'category',
                    data: [],
                    splitArea: {
                        show: true
                    }
                },
                visualMap: {
                    min: 0,
                    max: 10,
                    calculable: true,
                    orient: 'horizontal',
                    left: 'center',
                    bottom: '15%'
                },
                series: [{
                    name: 'Punch Card',
                    type: 'heatmap',
                    data: data,
                    label: {
                        normal: {
                            show: true
                        }
                    },
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 10,
                            shadowColor: 'rgba(0, 0, 0, 0.5)'
                        }
                    }
                }]
            }
    },
    //获取器
    getters:{
        //页面读取数据
        heatmapData:state=>state.graph,
        heatmapOption:state=>state.option
        // graphOption(state){
        //     return state.option
        // }
    },
    //突变
    mutations:{
        //数据修改操作
        alterHeatmapData(state,data){
            state.graph = data
        }
    },
    //动作
    actions:{
        //向后台请求数据等操作
        getHeatmapData(context){
            return new Promise((resolve,reject)=>{
                //请求路径为 ,返回的数据存放在data中       
                axios.get('heatmap/').then(({data})=>{
                    //通过mutations中的alterHeatmapData提交数据
                    context.commit('alterHeatmapData',data);
                resolve();
            }).catch((error)=>{
                reject(error);
            });
            });
        }
    }
}