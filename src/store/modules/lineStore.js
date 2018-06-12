import axios from '../axios'
import echarts from 'echarts'
export default {
    //初始状态
    state:{
        graph:{

        },
        option : { 
            title: {
                text: '内外部邮件堆叠图'
            },
            tooltip: {
                trigger: 'axis'
            },
             dataZoom: [
                {
                    show: true,
                    realtime: true,
                    start: 65,
                    end: 85
                },
                {
                    type: 'inside',
                    realtime: true,
                    start: 65,
                    end: 85
                }
                ],
            legend: {
                data:[]
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            toolbox: {
                feature: {
                    saveAsImage: {}
                }
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: []
            },
            yAxis: {
                type: 'value'
            },
            series: [
                {
                    name:'内部邮件',
                    type:'line',
                    stack: '总量',
                    data:[]
                },
                {
                    name:'外部邮件',
                    type:'line',
                    stack: '总量',
                    data:[]
                }
               
            ]
        }
    },
    //获取器
    getters:{
        //页面读取数据
        lineData:state=>state.graph,
        lineOption:state=>state.option
        // graphOption(state){
        //     return state.option
        // }
    },
    //突变
    mutations:{
        //数据修改操作
        alterLineData(state,data){
            state.graph = data
        }
    },
    //动作
    actions:{
        //向后台请求数据等操作
        getLineData(context){
            return new Promise((resolve,reject)=>{
                //请求路径为 ,返回的数据存放在data中       
                axios.get('line/').then(({data})=>{
                    //通过mutations中的alterTestData提交数据
                    context.commit('alterLineData',data);
                resolve();
            }).catch((error)=>{
                reject(error);
            });
            });
        }
    }
}