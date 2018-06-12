import axios from '../axios'
import echarts from 'echarts'

export default {
    //初始状态
    state:{
        graph:{

        },
    option : {
        title: {
            text: '人员重要程度评估',
            // textStyle: {
            //     color: '#f8f'
            // },
            left:'50%',
            top:0
        },
        tooltip: {},
        legend: {
            left:'left',
            width:'20%',
            data: []
        },
        radar: {
            // shape: 'circle',
            center:['60%','50%'],
            name: {
                textStyle: {
                    color: '#fff',
                    backgroundColor: '#999',
                    borderRadius: 3,
                    padding: [3, 5]
            }
            },
            indicator: []
        },
        series: [{
            name: '人员重要程度评估',
            type: 'radar',
            // areaStyle: {normal: {}},
            data : []
            }
        ]
    }
},
    //获取器
    getters:{
        //页面读取数据
        radarData : state=>state.graph,
        radarOption : state=>state.option
    },
    //突变
    mutations:{
        //数据修改操作
        alterRadarData(state,data){
            state.graph = data
        }
    },
    //动作
    actions:{
        //向后台请求数据等操作
        getRadarData(context){
            return new Promise((resolve,reject)=>{
                //请求路径为 ,返回的数据存放在data中       
                axios.get('radar/').then(({data})=>{
                    //通过mutations中的alterTestData提交数据
                    context.commit('alterRadarData',data);
                resolve();
            }).catch((error)=>{
                reject(error);
            });
            });
        }
    }
    }