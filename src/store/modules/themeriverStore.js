import axios from '../axios'
import echarts from 'echarts'
export default {
    //初始状态
    state:{
        graph:{

        },
        option : { 
            tooltip: {
                trigger: 'axis',
                axisPointer: {
                    type: 'line',
                    lineStyle: {
                        color: 'rgba(0,0,0,0.2)',
                        width: 1,
                        type: 'solid'
                    }
                }
            },
        
            legend: {
                data: ['DQ', 'TY', 'SS', 'QG', 'SY', 'DD']
            },
            title: {
                text: '主题流图',
                left:'top'
            },
            singleAxis: {
                top: 50,
                bottom: 50,
                axisTick: {},
                axisLabel: {},
                type: 'time',
                axisPointer: {
                    animation: true,
                    label: {
                        show: true
                    }
                },
                splitLine: {
                    show: true,
                    lineStyle: {
                        type: 'dashed',
                        opacity: 0.2
                    }
                }
            },
            dataZoom: [{
                        type: 'inside',
                        start: 0,
                        end: 10
                    }, {
                        start: 0,
                        end: 10,
                        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
                        handleSize: '80%',
                        handleStyle: {
                            color: '#fff',
                            shadowBlur: 3,
                            shadowColor: 'rgba(0, 0, 0, 0.6)',
                            shadowOffsetX: 2,
                            shadowOffsetY: 2
                        }
            }],
            series: [
                {
                    type: 'themeRiver',
                    itemStyle: {
                        emphasis: {
                            shadowBlur: 20,
                            shadowColor: 'rgba(0, 0, 0, 0.8)'
                        }
                    },
                    data: []
                }
            ]
        }
    },
    //获取器
    getters:{
        //页面读取数据
        themeriverData:state=>state.graph,
        themeriverOption:state=>state.option
        // graphOption(state){
        //     return state.option
        // }
    },
    //突变
    mutations:{
        //数据修改操作
        alterThemeriverData(state,data){
            state.graph = data
        }
    },
    //动作
    actions:{
        //向后台请求数据等操作
        getThemeriverData(context){
            return new Promise((resolve,reject)=>{
                //请求路径为 ,返回的数据存放在data中       
                axios.get('api/').then(({data})=>{
                    //通过mutations中的alterTestData提交数据
                    context.commit('alterThemeriverData',data);
                resolve();
            }).catch((error)=>{
                reject(error);
            });
            });
        }
    }
}